import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindtestrapComponent } from './blindtestrap.component';

describe('BlindtestrapComponent', () => {
  let component: BlindtestrapComponent;
  let fixture: ComponentFixture<BlindtestrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindtestrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindtestrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
