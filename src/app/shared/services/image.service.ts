import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  submittedImage$: BehaviorSubject<string | ArrayBuffer> = new BehaviorSubject(null);

  getImageObs(): Observable<string | ArrayBuffer> {
    return this.submittedImage$.asObservable();
  }

  setImageObs(imageFile: string | ArrayBuffer) {
    this.submittedImage$.next(imageFile);
  }

  constructor() { }
}
