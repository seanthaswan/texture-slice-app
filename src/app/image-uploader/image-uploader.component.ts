import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { StringFormatDefinition } from "ajv";
import { BehaviorSubject } from "rxjs";
import { FileSizePipe } from "../shared/pipes/file-size.pipe";
import { ImageService } from "../shared/services/image.service";

@Component({
  selector: "app-image-uploader",
  templateUrl: "./image-uploader.component.html",
  styleUrls: ["./image-uploader.component.scss"],
  providers: [FileSizePipe],
})
export class ImageUploaderComponent implements OnInit {
  @Output() imageChanged: EventEmitter<string | ArrayBuffer> =
    new EventEmitter();

  myForm: FormGroup = new FormGroup({
    file: new FormControl("", [Validators.required]),
  });

  imagePreviewMetadata: {
    previewUrl: SafeUrl;
    size: number;
    name: string;
    stream: File;
  };
  myFormPreviewData: string;
  imageFile: string | ArrayBuffer;
  errors: Error[] = [];


  constructor(private sanitizer: DomSanitizer, private router: Router, private imageService: ImageService) {}

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: Event) {
    console.log(event);
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader: FileReader = new FileReader();
    this.errors = [];

    if (!target || !target.files.length || !file.type.includes("image")) {
      const bytesInMb = 1048576;
      const maxMb = 100;

      if (file.size > bytesInMb * maxMb) {
        console.log(file.size, bytesInMb * maxMb);
        this.errors.push(
          new Error(
            `Your image is too big. Please re-upload an image that's ${maxMb}mb or less.`
          )
        );
      }

      this.errors.push(
        new Error("Invalid or missing image file. Please try again.")
      );
      return;
    }

    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      this.imageFile = reader.result;
    };

    this.myForm.get("file").setValue(file);
    const objectURL = URL.createObjectURL(file);
    const sanitizedImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.imagePreviewMetadata = {
      previewUrl: sanitizedImageUrl,
      size: file.size,
      name: file.name,
      stream: file,
    };
  }

  submitForm() {
    this.imageService.setImageObs(this.imageFile);
    this.router.navigate(['/app/workspace']);
  }

  ngOnInit(): void {}
}
