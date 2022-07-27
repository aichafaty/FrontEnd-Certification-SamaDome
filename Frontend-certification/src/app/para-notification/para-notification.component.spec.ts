import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaNotificationComponent } from './para-notification.component';

describe('ParaNotificationComponent', () => {
  let component: ParaNotificationComponent;
  let fixture: ComponentFixture<ParaNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
