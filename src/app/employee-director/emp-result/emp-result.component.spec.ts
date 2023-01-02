import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpResultComponent } from './emp-result.component';

describe('EmpResultComponent', () => {
  let component: EmpResultComponent;
  let fixture: ComponentFixture<EmpResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
