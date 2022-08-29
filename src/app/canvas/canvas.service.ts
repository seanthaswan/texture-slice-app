import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  drawToStage(context: CanvasRenderingContext2D, image: string | ArrayBuffer) {
    const imageEl = new Image();
    imageEl.onload = () => {
      context.drawImage(imageEl, (context.canvas.width / 2) - imageEl.width / 2, (context.canvas.height / 2) - imageEl.height / 2);
    }
    var enc = new TextDecoder("utf-8");

    imageEl.src = '' + image;
    console.log(context)
    console.log(image)
    return;
  }
}
