import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocleanerComponent } from './photocleaner.component';

describe('PhotocleanerComponent', () => {
  let component: PhotocleanerComponent;
  let fixture: ComponentFixture<PhotocleanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocleanerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotocleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
