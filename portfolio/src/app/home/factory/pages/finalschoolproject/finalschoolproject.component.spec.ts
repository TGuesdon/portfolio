import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalschoolprojectComponent } from './finalschoolproject.component';

describe('FinalschoolprojectComponent', () => {
  let component: FinalschoolprojectComponent;
  let fixture: ComponentFixture<FinalschoolprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalschoolprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalschoolprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
