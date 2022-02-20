import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRouterComponent } from './screen-router.component';

describe('ScreenRouterComponent', () => {
  let component: ScreenRouterComponent;
  let fixture: ComponentFixture<ScreenRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
