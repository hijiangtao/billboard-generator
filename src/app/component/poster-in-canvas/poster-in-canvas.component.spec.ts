import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterInCanvasComponent } from './poster-in-canvas.component';

describe('PosterInCanvasComponent', () => {
  let component: PosterInCanvasComponent;
  let fixture: ComponentFixture<PosterInCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterInCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterInCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
