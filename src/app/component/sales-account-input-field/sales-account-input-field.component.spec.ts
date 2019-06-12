import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesAccountInputFieldComponent } from './sales-account-input-field.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('SalesAccountInputFieldComponent', () => {
  let component: SalesAccountInputFieldComponent;
  let fixture: ComponentFixture<SalesAccountInputFieldComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
