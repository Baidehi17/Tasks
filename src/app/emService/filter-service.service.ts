import { Injectable, OnInit } from '@angular/core';
import { EmpService } from './emp.service';
import { Empclass } from './empclass';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService implements OnInit {
   employeeList: Empclass[]=[];
   filterdEmplist: Empclass[]=[];
  constructor(private empservice: EmpService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }



  ngOnInit() {
    this.empservice.getAllEmployee().subscribe(data => {
      //this.empservice.employeeList = data;
      this.employeeList = data;
       console.log(data)
      this.filterdEmplist = this.employeeList;
    })
  }

  letter: any;
  dropdownSearch: any;
  inboxSearch: any;
  sidemenuSearch: any;

  connectfilter() {

      if (this.dropdownSearch == null) {
        if (this.letter != null) {
          //console.log(this.employeeList)
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }

        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
        else if (this.sidemenuSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(this.sidemenuSearch) || (x.office.toLowerCase().includes(this.sidemenuSearch)) || (x.jobTitle.toLowerCase().includes(this.sidemenuSearch))))
          console.log(this.filterdEmplist)
        }
        else { return }
      }
      if (this.dropdownSearch == 'Name') {
        console.log(this.dropdownSearch);
        this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'LastName') {
        this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'PreferredName') {
        this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'Email') {
        this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'Department') {
        this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'jobTitle') {
        this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else if (this.dropdownSearch == 'Office') {
        this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(this.inboxSearch));
        if (this.letter != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().startsWith(this.letter));
          console.log(this.filterdEmplist)
        }
        else if (this.inboxSearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(this.inboxSearch));
          console.log(this.filterdEmplist)
        }
      }
      else {
        this.filterdEmplist = this.employeeList;
      }
    
  }
}
