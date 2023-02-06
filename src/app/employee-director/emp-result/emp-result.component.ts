
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpService } from './../../emService/emp.service';
import { Empclass } from './../../emService/empclass';
import { HttpClient } from '@angular/common/http';
import { FilterServiceService } from 'src/app/emService/filter-service.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/emService/eventService';

@Component({
  selector: 'app-emp-result',
  templateUrl: './emp-result.component.html',
  styleUrls: ['./emp-result.component.scss']
})
export class EmpResultComponent implements OnInit {

  constructor(private empservice: EmpService, private filterservice: FilterServiceService) {
  }


  editForm!: FormGroup;
  employeeList = this.filterservice.filterdEmplist;

  loadData() {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data
    });
  }

  ngOnInit(): void {
    this.loadData();
     EventService.reloadData.subscribe(r => {
      this.loadData();
     });

    this.filterservice.connectFilter.subscribe((data) => { this.employeeList = data });

  }
  openEdit(emp: Empclass) {
    EventService.employeeEvent.emit(emp);
  }
}
