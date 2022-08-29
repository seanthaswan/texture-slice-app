import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ImageService } from "../shared/services/image.service";
import { CanvasService } from "./canvas.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() image: string | ArrayBuffer;

  @ViewChild("cuttingCanvas", { static: false })
  cuttingCanvas: ElementRef;

  @ViewChild("previewCanvas", { static: false })
  previewCanvas: ElementRef;

  public width: number;
  public height: number;

  public cuttingCanvasContext: CanvasRenderingContext2D;
  public previewCanvasContext: CanvasRenderingContext2D;
  

  constructor(private cdref: ChangeDetectorRef, private imageService: ImageService, private canvasService: CanvasService) {
    this.canvasService = new CanvasService();
    }

  ngOnInit() {    
    console.log(this.image);
  }

  ngAfterViewInit(): void {
    const workspaceContainerEl = this.cuttingCanvas.nativeElement.parentElement.parentElement;
    this.cuttingCanvasContext = this.cuttingCanvas.nativeElement.getContext("2d");
    this.previewCanvasContext = this.previewCanvas.nativeElement.getContext("2d");
    // Fix me: After instructions are filled out, adjust margins.
    const margin = 25;
    const extra = 50;
    this.width = workspaceContainerEl.offsetWidth - margin;
    this.height = ((workspaceContainerEl.offsetHeight - margin) / 2) - extra;
    this.canvasService.drawToStage(this.cuttingCanvasContext, this.image);    
    this.cdref.detectChanges();
  }
  
  ngOnDestroy() {
  }
  
}
