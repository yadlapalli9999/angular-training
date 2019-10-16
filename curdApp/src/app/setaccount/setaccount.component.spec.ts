import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetaccountComponent } from './setaccount.component';

describe('SetaccountComponent', () => {
  let component: SetaccountComponent;
  let fixture: ComponentFixture<SetaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
