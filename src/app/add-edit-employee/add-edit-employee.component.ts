import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpService } from 'src/app/emService/emp.service';
import { Empclass } from 'src/app/emService/empclass';
import { EventService } from '../emService/eventService';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit, OnChanges {
  @Input() empId: number = 0;
  @Output() saveForm = new EventEmitter<any>();
  employee: Empclass = new Empclass();

  constructor(private empService: EmpService,
    private modelservice: NgbModal) {
  }

  ngOnInit() {
  }

  ngOnChanges(change : SimpleChanges): void {
    this.loadData();
  }

  loadData() {
    if (this.empId) {
      this.empService.getEmpById(this.empId).subscribe(res => {
        this.employee = res;
        console.log(this.employee, res);
      },
        err => {
          console.log(err);
        });
    }
  }

  submit(form: NgForm) {
    if (this.empId == null) {
      this.empService.AddEmployees(this.employee).subscribe(res => {
        this.modelservice.dismissAll();
      });
    }
    else {
      this.empService.updateemploye(this.empId, this.employee).subscribe(res => {
        this.modelservice.dismissAll();
        EventService.reloadData.emit();
      });
    }
  }

  delete(){
    this.empService.deleteEmploye(this.empId).subscribe(res => {
      this.modelservice.dismissAll();
      EventService.reloadData.emit();
    });
  }

}