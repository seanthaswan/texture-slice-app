import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent implements OnInit {
  @Input() errors: Error[];

  constructor() {}

  popItem(e) {
    const clickedItemIndex = e.target.attributes[2].value;
    this.errors.splice(clickedItemIndex, 1);
  }

  ngOnInit(): void {}
}
