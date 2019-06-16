import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsDispayComponent } from './company-details-dispay.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CompanyDetailsDispayComponent', () => {
  let component: CompanyDetailsDispayComponent;
  let fixture: ComponentFixture<CompanyDetailsDispayComponent>;
  let compiled: HTMLElement;


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
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a first name label', () => {
    expect(compiled.querySelector('label').textContent).toContain('Customer UID');
  });

  it('should have a company name label', () => {
    expect(compiled.querySelectorAll('label').item(1).textContent).toContain('Company\'s Name');
  });

  it('should have a company name label', () => {
    expect(compiled.querySelectorAll('label').item(2).textContent).toContain('First Name');
  });

  it('should have a last name label', () => {
    expect(compiled.querySelectorAll('label').item(3).textContent).toContain('Last Name');
  });

  it('should have a email label', () => {
    expect(compiled.querySelectorAll('label').item(4).textContent).toContain('Email');
  });

  it('should have a address label', () => {
    expect(compiled.querySelectorAll('label').item(5).textContent).toContain('Address');
  });
});
