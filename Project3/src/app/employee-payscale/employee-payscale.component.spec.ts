import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayscaleComponent } from './employee-payscale.component';

describe('EmployeePayscaleComponent', () => {
  let component: EmployeePayscaleComponent;
  let fixture: ComponentFixture<EmployeePayscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayscaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
