import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealtekComponent } from './idealtek.component';

describe('IdealtekComponent', () => {
  let component: IdealtekComponent;
  let fixture: ComponentFixture<IdealtekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealtekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealtekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
