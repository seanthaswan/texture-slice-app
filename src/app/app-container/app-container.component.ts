import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { ImageService } from "../shared/services/image.service";

@Component({
  selector: "app-app-container",
  templateUrl: "./app-container.component.html",
  styleUrls: ["./app-container.component.scss"],
})
export class AppContainerComponent implements OnInit {
  url: Subscription | string;

  constructor(private router: Router, private imageService: ImageService) {
    this.url = this.router.events.subscribe((event) => {
      this.url = this.router.url;
    });
  }

  ngOnInit() {
  }
}
