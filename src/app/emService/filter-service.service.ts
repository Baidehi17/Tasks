import { getLocaleDateTimeFormat } from '@angular/common';
import { Injectable, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Constants } from './constants';
import { EmpService } from './emp.service';
import { Empclass } from './empclass';
@Injectable({
  providedIn: 'root'
})
export class FilterServiceService implements OnInit {
  employeeList: Empclass[] = [];
  employeeList2: Empclass[] = [];
  filterdEmplist: Empclass[] = [];
  fields = Constants.employeeFields;
  constructor(private empservice: EmpService) { }
  ngOnInit() {
  }

  letterAtoZ: any;
  dropdownSearch!: any;
  inboxSearch: any;
  jobs: any;

  addemployee(employeeData: any) {
    this.empservice.AddEmployees(employeeData).subscribe(data => {
      this.connectFilter.next(data) //relaod the table
    })
  }
  connectFilter = new Subject<any>();

  connectingFilter(para: any) {

    this.empservice.getAllEmployee().subscribe(data => {
      this.filterdEmplist = this.employeeList = data;

      if (this.letterAtoZ != null) {
        this.filterdEmplist = this.filterdEmplist.filter(x =>( x.firstName.toLowerCase().startsWith(this.letterAtoZ)));}

      if (this.jobs != null) {
        this.filterdEmplist = this.filterdEmplist.filter(x => (x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase()))))}

      if (this.dropdownSearch == null) {
        if (this.inboxSearch != null)
          this.filterdEmplist = this.filterdEmplist.filter(x => x.firstName.toLowerCase().includes(this.inboxSearch));}
     
      if (this.dropdownSearch != -1) {
        if(this.inboxSearch!=null){
        let prop = this.fields[this.dropdownSearch] as keyof Empclass;
        this.filterdEmplist = this.filterdEmplist.filter((x: Empclass) => x[prop].toString().toLowerCase().includes(this.inboxSearch.toLowerCase()));}
      }
      this.connectFilter.next(this.filterdEmplist);
    })
  }

  refreshFilter(refresh: any) {
    if (refresh == '') {
      this.filterdEmplist=this.employeeList;
      this.connectFilter.next(this.filterdEmplist);
      this.letterAtoZ = null;
      this.inboxSearch = null;
      this.dropdownSearch=null;
      this.jobs = null;
    }
  }

  letterSearch(letter: any) {
    this.letterAtoZ = letter;
    this.connectingFilter(this.letterAtoZ);
    this.refreshFilter(this.letterAtoZ);
  }

  inbox(inboxsearch: any) {
    this.inboxSearch = inboxsearch;
    this.connectingFilter(this.inboxSearch);
    this.refreshFilter(this.inboxSearch);
  }

  dropdownsearch(dropdownsearch: any) {
    this.dropdownSearch = dropdownsearch;
    this.connectingFilter(this.dropdownSearch)
    this.refreshFilter(this.dropdownSearch)
  }

  sidesearch(sidesearch: any) {
    this.jobs = sidesearch;
    this.connectingFilter(this.jobs);
    this.refreshFilter(this.jobs);
  }
}

