import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCanvasComponent } from './pure-canvas.component';

describe('PureCanvasComponent', () => {
  let component: PureCanvasComponent;
  let fixture: ComponentFixture<PureCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PureCanvasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
