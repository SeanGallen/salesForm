import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesAccountInputFieldComponent } from './sales-account-input-field.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('SalesAccountInputFieldComponent', () => {
  let component: SalesAccountInputFieldComponent;
  let fixture: ComponentFixture<SalesAccountInputFieldComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ SalesAccountInputFieldComponent ],
      providers: [
        { 
          provide: Router, 
          useValue: {
            params: of({ get: (key) => 'value' })
          }
        } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAccountInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a first name label', () => {
    expect(compiled.querySelector('label').textContent).toContain('First Name');
  });

  it('should have a last name label', () => {
    console.log(compiled.querySelectorAll('label').item(1));
    expect(compiled.querySelectorAll('label').item(1).textContent).toContain('Last Name');
  });

  it('should have a company name label', () => {
    expect(compiled.querySelectorAll('label').item(2).textContent).toContain('Company\'s Name');
  });

  it('should have a email label', () => {
    expect(compiled.querySelectorAll('label').item(3).textContent).toContain('Email');
  });

  it('should have a address label', () => {
    expect(compiled.querySelectorAll('label').item(4).textContent).toContain('Address');
  });

});
