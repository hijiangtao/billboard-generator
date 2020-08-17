import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasVideoFilterComponent } from './canvas-video-filter.component';

describe('CanvasVideoFilterComponent', () => {
  let component: CanvasVideoFilterComponent;
  let fixture: ComponentFixture<CanvasVideoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasVideoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasVideoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
