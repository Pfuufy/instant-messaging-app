import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbMessageComponent } from './dumb-message.component';

describe('DumbMessageComponent', () => {
  let component: DumbMessageComponent;
  let fixture: ComponentFixture<DumbMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
