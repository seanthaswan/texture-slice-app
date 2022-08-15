import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required])
 });

  constructor() {} 
  
  get f() { return this.myForm.controls; }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0]);
      const file = event.target.files[0];
      this.myForm.get('file').setValue(file);
    }
  }

  submitForm() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('file').value);
    console.log(formData);
  }
  
  ngOnInit(): void {
  }

}
