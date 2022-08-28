import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isConfirmationNeeded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  triggerConfirmation() {
    this.isConfirmationNeeded = !this.isConfirmationNeeded;
    console.log('triggered')
  }

  exitApp() {
    window.location.href = 'https://google.com';
  }
}
