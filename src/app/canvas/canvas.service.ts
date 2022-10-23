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
    return;
  }


  drawRectangle(context: CanvasRenderingContext2D, image: string | ArrayBuffer) {
    const imageEl = new Image();
    let width, height;
    imageEl.onload = () => {
      context.beginPath();
      context.rect((context.canvas.width / 2) - imageEl.width / 2, (context.canvas.height / 2) - imageEl.height / 2, imageEl.width, imageEl.height);
      context.lineWidth = 4;
      context.strokeStyle = 'pink';
      context.stroke();
    }

    imageEl.src = image.toString();
    console.dir(imageEl);

  }

  getCoordsAndKeysFromClick(event: MouseEvent, context: CanvasRenderingContext2D) {
    return {
      x: event.offsetX,
      y: event.offsetY,
      shiftKey: event.shiftKey,
      ctrlKey: event.ctrlKey
    }
  }
}
