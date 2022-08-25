import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-more",
  templateUrl: "./more.component.html",
  styleUrls: ["./more.component.scss"],
})
export class MoreComponent implements OnInit {
  url: any;
  constructor(private router: Router) {
    this.url = this.router.events.subscribe((event) => {
      this.url = this.router.url;
    });
  }

  ngOnInit() {}
}
