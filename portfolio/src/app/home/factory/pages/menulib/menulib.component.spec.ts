import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulibComponent } from './menulib.component';

describe('MenulibComponent', () => {
  let component: MenulibComponent;
  let fixture: ComponentFixture<MenulibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
