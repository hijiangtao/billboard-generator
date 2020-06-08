import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterInFabricComponent } from './poster-in-fabric.component';

describe('PosterInFabricComponent', () => {
  let component: PosterInFabricComponent;
  let fixture: ComponentFixture<PosterInFabricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterInFabricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterInFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
