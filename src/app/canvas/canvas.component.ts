import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild("appCanvas", { static: false }) myCanvas: ElementRef;

  public context: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext("2d");
  }
}
