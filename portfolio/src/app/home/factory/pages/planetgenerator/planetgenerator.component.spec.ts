import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetgeneratorComponent } from './planetgenerator.component';

describe('PlanetgeneratorComponent', () => {
  let component: PlanetgeneratorComponent;
  let fixture: ComponentFixture<PlanetgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetgeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
