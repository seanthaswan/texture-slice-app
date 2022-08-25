import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  public imageFile: string | ArrayBuffer;
  imageChangedHandler(e) {
    console.log("fromLandingPage", e);
    this.imageFile = e;
  }

  ngOnInit(): void {}
}
