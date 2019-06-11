import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsDispayComponent } from './company-details-dispay.component';
import { HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

describe('CompanyDetailsDispayComponent', () => {
  let component: CompanyDetailsDispayComponent;
  let fixture: ComponentFixture<CompanyDetailsDispayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
