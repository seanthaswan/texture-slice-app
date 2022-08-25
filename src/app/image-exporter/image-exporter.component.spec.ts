import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageExporterComponent } from './image-exporter.component';

describe('ImageExporterComponent', () => {
  let component: ImageExporterComponent;
  let fixture: ComponentFixture<ImageExporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageExporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
