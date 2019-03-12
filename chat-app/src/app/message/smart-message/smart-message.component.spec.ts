import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMessageComponent } from './smart-message.component';

describe('SmartMessageComponent', () => {
  let component: SmartMessageComponent;
  let fixture: ComponentFixture<SmartMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
