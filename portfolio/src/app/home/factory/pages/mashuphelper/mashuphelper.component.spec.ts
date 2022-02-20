import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashuphelperComponent } from './mashuphelper.component';

describe('MashuphelperComponent', () => {
  let component: MashuphelperComponent;
  let fixture: ComponentFixture<MashuphelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MashuphelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MashuphelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
