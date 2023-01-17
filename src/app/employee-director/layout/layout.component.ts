import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpService } from './../../emService/emp.service';
import { Empclass } from './../../emService/empclass';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  employeeList!: Empclass[];
  filterdEmplist!: Empclass[];
  
  constructor(private empservice: EmpService) { }

  ngOnInit() {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;
    }
    );
  }

  //search button A to Z
  clickedWord(letter: any) {
    if (letter) {
      this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(letter));
    } 
    else {
      this.filterdEmplist = this.employeeList;
    }}

  //SearchWord filter
  SearchWord(word: any) {
    word = word.toLowerCase();
    console.log(word)
    if (word) {
      this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(word) || x.lastName.toLowerCase().includes(word) || x.preferredName.toLowerCase().includes(word) || x.email.toLowerCase().includes(word)|| x.department.toLowerCase().includes(word) || x.jobTitle.toLowerCase().includes(word)|| x.office.toLowerCase().includes(word));
    }
    else {
      this.filterdEmplist = this.employeeList;
    }
  }
 // Search Filter Dropdown
 Searcherfilter(dropdown:any)
 {
  if(dropdown)
  {
   this.SearchWord(dropdown);
  }
 }
  //Add New Employee
  Addemployee(empdata: any) {
    this.empservice.AddEmployees(empdata)
      .subscribe(
        data => { this.ngOnInit(); // reload the table 
       }
      );
    }
    jobcount={
      IT:0
      
    }
  //Search for department , job title ,office
  searchjobs(jobs: any) {
    jobs = jobs.toLowerCase();
    if(jobs)
    {
      this.filterdEmplist=this.employeeList.filter(x=>(x.department.toLowerCase().includes(jobs) || (x.office.toLowerCase().includes(jobs))|| (x.jobTitle.toLowerCase().includes(jobs))))
    }
    // this.filterdEmplist.forEach(emp=>{
    //   if(emp.department=='IT')
    //   this.jobcount.IT++;
    //   console.log(this.jobcount.IT)
    // })
    this.clickedWord
  }
}

