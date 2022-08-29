import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit, AfterViewInit, OnDestroy {
  image: string | ArrayBuffer;
  imageSubscription: Subscription;

  constructor(private imageService: ImageService) {

  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.imageSubscription = this.imageService.getImageObs().subscribe((image) => {
      this.image = image
    });
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }
}
