import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundsliderComponent } from './backgroundslider.component';

describe('BackgroundsliderComponent', () => {
  let component: BackgroundsliderComponent;
  let fixture: ComponentFixture<BackgroundsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundsliderComponent]
    });
    fixture = TestBed.createComponent(BackgroundsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
