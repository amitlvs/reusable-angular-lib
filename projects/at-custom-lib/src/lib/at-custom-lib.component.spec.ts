import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCustomLibComponent } from './at-custom-lib.component';

describe('AtCustomLibComponent', () => {
  let component: AtCustomLibComponent;
  let fixture: ComponentFixture<AtCustomLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtCustomLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
