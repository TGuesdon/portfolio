import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchpartyComponent } from './twitchparty.component';

describe('TwitchpartyComponent', () => {
  let component: TwitchpartyComponent;
  let fixture: ComponentFixture<TwitchpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchpartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
