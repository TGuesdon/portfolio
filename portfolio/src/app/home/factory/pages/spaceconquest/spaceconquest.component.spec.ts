import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceconquestComponent } from './spaceconquest.component';

describe('SpaceconquestComponent', () => {
  let component: SpaceconquestComponent;
  let fixture: ComponentFixture<SpaceconquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceconquestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceconquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
