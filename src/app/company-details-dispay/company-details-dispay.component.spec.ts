import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsDispayComponent } from './company-details-dispay.component';

describe('CompanyDetailsDispayComponent', () => {
  let component: CompanyDetailsDispayComponent;
  let fixture: ComponentFixture<CompanyDetailsDispayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsDispayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsDispayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
