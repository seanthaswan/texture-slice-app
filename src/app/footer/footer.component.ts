import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  url: any;
  todayDate: Date;

  constructor(private router: Router) {
    this.url = this.router.events.subscribe(event => {
      this.url = this.router.url;
    } );  

    let date = new Date();
    this.todayDate = date
    // get todays date
    let todaysDate = new Date();

  }
  
  ngOnInit(): void {
  }

}
