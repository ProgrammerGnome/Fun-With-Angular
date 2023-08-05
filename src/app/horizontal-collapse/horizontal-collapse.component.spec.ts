import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCollapseComponent } from './horizontal-collapse.component';

describe('HorizontalCollapseComponent', () => {
  let component: HorizontalCollapseComponent;
  let fixture: ComponentFixture<HorizontalCollapseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalCollapseComponent]
    });
    fixture = TestBed.createComponent(HorizontalCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
