import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsDispayComponent } from './company-details-dispay.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CompanyDetailsDispayComponent', () => {
  let component: CompanyDetailsDispayComponent;
  let fixture: ComponentFixture<CompanyDetailsDispayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [HttpClientTestingModule], 
      declarations: [ CompanyDetailsDispayComponent ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            params: of({ get: (key) => 'value' })
          }
      }
      ]
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
