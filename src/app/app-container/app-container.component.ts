import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-app-container",
  templateUrl: "./app-container.component.html",
  styleUrls: ["./app-container.component.scss"],
})
export class AppContainerComponent implements OnInit {
  url: any;

  constructor(private router: Router) {
    this.url = this.router.events.subscribe((event) => {
      this.url = this.router.url;
    });
  }

  ngOnInit() {}
}
