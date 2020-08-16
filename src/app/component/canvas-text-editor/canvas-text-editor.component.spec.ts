import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTextEditorComponent } from './canvas-text-editor.component';

describe('CanvasTextEditorComponent', () => {
  let component: CanvasTextEditorComponent;
  let fixture: ComponentFixture<CanvasTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
