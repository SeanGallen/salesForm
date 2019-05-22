import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAccountInputFieldComponent } from './sales-account-input-field.component';

describe('SalesAccountInputFieldComponent', () => {
  let component: SalesAccountInputFieldComponent;
  let fixture: ComponentFixture<SalesAccountInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAccountInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAccountInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
