import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviCRMComponent } from './civi-crm.component';

describe('CiviCRMComponent', () => {
  let component: CiviCRMComponent;
  let fixture: ComponentFixture<CiviCRMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiviCRMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiviCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
