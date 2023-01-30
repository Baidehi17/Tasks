import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
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
  filter!: Empclass[];

  constructor(private empservice: EmpService) { }

  ngOnInit() {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;

    }
    );
  }

  dropdown: any;

  refreshPage() {
    this.ngOnInit();
    window.location.reload();
    // this.filterdEmplist=this.employeeList
  }
  // Search Filter Dropdown
  Searcherfilter(dropdown: any) {
    this.dropdown = dropdown;
    console.log(this.dropdown)
  }
  //search button A to Z
  char: any;
  // clickedWord(letter: any) { 
  //   this.char = letter;
  //   if (letter != null) {      
  //     this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(letter));
  //   }
  //     if(this.words!=null)
  //     {
  //       this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.char)) && (x.fristName.toLowerCase().startsWith(this.words)));
  //       console.log(this.words)
  //     }
  //     else {
  //       return this.filterdEmplist =this.employeeList
  //     }
  //    if (this.Jobs != null) {
  //     this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.char)) && ((x.department.toLowerCase().includes(this.Jobs)) || ((x.office.toLowerCase().includes(this.Jobs))) || (x.jobTitle.toLowerCase().includes(this.Jobs))));
  //   }

  //   else {
  //     return this.filterdEmplist =this.employeeList
  //   }

  //   if (this.dropdown! == null) {
  //     // this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(letter));

  //   }
  //   else if (this.dropdown == 'Name') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'LastName') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'PreferredName') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'Email') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'Department') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'jobTitle') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().startsWith(letter));
  //   }
  //   else if (this.dropdown == 'Office') {
  //     this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().startsWith(letter));
  //   }
  //   else {
  //     this.filterdEmplist = this.employeeList;
  //   }
  // }
  //SearchWord filter
  words: any;
  SearchWord(word: any) {
    word = word.toLowerCase();
    this.words = word; //console.log(this.clickedWord)
    if (this.dropdown == null) {
      this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(word));
      if (this.char != null) {
        this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.char)) && (x.fristName.toLowerCase().startsWith(this.words)));

      }
      if (this.Jobs != null) {

        this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.words)) && ((x.department.toLowerCase().includes(this.Jobs)) || ((x.office.toLowerCase().includes(this.Jobs))) || (x.jobTitle.toLowerCase().includes(this.Jobs))));
        //this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.Jobs)) && (x.fristName.toLowerCase().startsWith(this.words)));

      }
    }

    else if (this.dropdown == 'Name') {
      this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'LastName') {
      this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'PreferredName') {
      this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'Email') {
      this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'Department') {
      this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'jobTitle') {
      this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(word));
    }
    else if (this.dropdown == 'Office') {
      this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(word));
    }
    else {
      this.filterdEmplist = this.employeeList;
    }


  }
  //Add New Employee
  Addemployee(empdata: any) {
    this.empservice.AddEmployees(empdata)
      .subscribe(
        data => {
          this.ngOnInit(); // reload the table 
        }
      );
  }
  //Search for department , job title ,office
  Jobs: any;
  searchjobs(jobs: any) {
    jobs = jobs.toLowerCase();
    this.Jobs = jobs;
    //this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(jobs) || (x.office.toLowerCase().includes(jobs)) || (x.jobTitle.toLowerCase().includes(jobs))))

    if (this.dropdown == null) {
      this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(jobs) || (x.office.toLowerCase().includes(jobs)) || (x.jobTitle.toLowerCase().includes(jobs))))
      if (this.char != null) {
        this.filter = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.char)) && ((x.department.toLowerCase().includes(this.Jobs)) || ((x.office.toLowerCase().includes(this.Jobs))) || (x.jobTitle.toLowerCase().includes(this.Jobs))));
        console.log(this.filter);
        this.filterdEmplist = this.filter
      }
      if (this.words != null) {
        this.filter = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.words)) && ((x.department.toLowerCase().includes(this.Jobs)) || ((x.office.toLowerCase().includes(this.Jobs))) || (x.jobTitle.toLowerCase().includes(this.Jobs))));
        console.log(this.filter);
        this.filterdEmplist = this.filter
      }
      else {
        return
      }

    }
    else if (this.dropdown == 'Department') {
      this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(jobs));
    }
    else if (this.dropdown == 'jobTitle') {
      this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(jobs));
    }
    else if (this.dropdown == 'Office') {
      this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(jobs));
    }
    else {

      this.filterdEmplist = this.employeeList;
    }
  }
}

