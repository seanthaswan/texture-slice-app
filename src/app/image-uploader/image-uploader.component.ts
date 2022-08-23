import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { StringFormatDefinition } from 'ajv';
import { FileSizePipe } from '../shared/pipes/file-size.pipe';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [
    FileSizePipe,
  ]
})
export class ImageUploaderComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });

  imagePreviewMetadata: { previewUrl: SafeUrl, size: number, name: string, stream: File };
  myFormPreviewData: string;

  constructor(private sanitizer: DomSanitizer) { }

  get f() { return this.myForm.controls; }

  onFileChange(event: Event) {
    console.log(event);
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (!target || !target.files.length || !file.type.includes('image')) {
      console.error('Invalid or missing image file.')
      return;
    }

    this.myForm.get('file').setValue(file);
    const objectURL = URL.createObjectURL(file);
    const sanitizedImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.imagePreviewMetadata = {
      previewUrl: sanitizedImageUrl,
      size: file.size,
      name: file.name,
      stream: file
      }
  }

  submitForm() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('file').value);
    this.myFormPreviewData = this.myForm.status;
    formData.forEach((e) => {
      console.log('Form Data', e)
    });
  }

  ngOnInit(): void {
  }

}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
