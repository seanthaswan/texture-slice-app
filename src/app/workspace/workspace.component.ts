import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  image: string | ArrayBuffer;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImageObs().subscribe(image => this.image = image);
    console.log("from workSpace", this.image);
  }
}
