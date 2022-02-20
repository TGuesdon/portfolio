import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildideasComponent } from './buildideas.component';

describe('BuildideasComponent', () => {
  let component: BuildideasComponent;
  let fixture: ComponentFixture<BuildideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildideasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
