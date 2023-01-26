import { getLocaleDateTimeFormat } from '@angular/common';
import { Injectable, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EmpService } from './emp.service';
import { Empclass } from './empclass';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService implements OnInit {
  employeeList: Empclass[] = [];
  filterdEmplist: Empclass[] = [];
  constructor(private empservice: EmpService) { }
  ngOnInit() {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;
    })
  }

  letterAtoZ: any;
  dropdownSearch: any;
  inboxSearch: any;
  jobs: any;

  //connectfilter = new Subject<any>();
  //  connectfilter() {
  //   this.empservice.getAllEmployee().subscribe(data => {
  //     //this.empservice.employeeList = data;
  //     this.employeeList = data;
  //     this.filterdEmplist = this.employeeList;

  //     if (this.dropdownSearch == null) {
  //       if (this.letter != null) {
  //         console.log(this.letter)
  //         this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //         this.filter.next(this.filterdEmplist);
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist);
  //         this.filter.next(this.filterdEmplist);
  //       }
  //       else if (this.jobs != null) {
  //         console.log(this.jobs)
  //         this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(this.jobs) || (x.office.toLowerCase().includes(this.jobs)) || (x.jobTitle.toLowerCase().includes(this.jobs))))
  //         console.log(this.filterdEmplist);
  //         this.filter.next(this.filterdEmplist);
  //       }

  //     }
  //     if (this.dropdownSearch == 'Name') {
  //       console.log(this.dropdownSearch);
  //       this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'LastName') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'PreferredName') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'Email') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'Department') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'jobTitle') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else if (this.dropdownSearch == 'Office') {
  //       this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(this.inboxSearch));
  //       if (this.letter != null) {
  //         this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().startsWith(this.letter));
  //         console.log(this.filterdEmplist)
  //       }
  //       else if (this.inboxSearch != null) {
  //         console.log(this.inboxSearch)
  //         this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(this.inboxSearch));
  //         console.log(this.filterdEmplist)
  //       }
  //     }
  //     else {
  //       this.filterdEmplist = this.employeeList;
  //     }
  //   })
  //}



  letterS = new Subject<any>();
  letterSearch(letter: any) {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;

      this.letterAtoZ=letter;

      if (letter != null) {
        letter = letter.toLowerCase();
        this.letterAtoZ = letter;

        this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(letter));
        this.letterS.next(this.filterdEmplist);
      }
    })
  }

  inboxs = new Subject<any>;
  inbox(inboxsearch: any) {
    inboxsearch = inboxsearch.toLowerCase()
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;

      if (this.letterAtoZ!= null) {
        if (inboxsearch != null) {
          console.log(this.inboxSearch)
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(inboxsearch));
          console.log(this.filterdEmplist);
          this.inboxs.next(this.filterdEmplist);
        }
        
      }
    })

  }
  dropdowns = new Subject<any>
  dropdownsearch(dropdownsearch: any) {
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;
    })
    dropdownsearch = dropdownsearch.toLowerCase();
    this.dropdownSearch = dropdownsearch;
    if (dropdownsearch == 'Name') {
      this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
      console.log(this.dropdownSearch)
    }
    else if (dropdownsearch == 'LastName') {
      this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }
    else if (dropdownsearch == 'PreferredName') {
      this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }
    else if (dropdownsearch == 'Email') {
      this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }
    else if (dropdownsearch == 'Department') {
      this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }
    else if (dropdownsearch == 'jobTitle') {
      this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }
    else if (dropdownsearch == 'Office') {
      this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(dropdownsearch));
      this.dropdowns.next(this.filterdEmplist)
    }

  }
  sidesearchjobs = new Subject<any>
  sidesearch(sidesearch: any) {
    sidesearch = sidesearch.toLowerCase();
    this.empservice.getAllEmployee().subscribe(data => {
      this.employeeList = data;
      this.filterdEmplist = this.employeeList;
      if (sidesearch != null) {
        console.log(sidesearch)
        this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(sidesearch) || (x.office.toLowerCase().includes(sidesearch)) || (x.jobTitle.toLowerCase().includes(sidesearch))))
        console.log(this.filterdEmplist);
        this.sidesearchjobs.next(this.filterdEmplist);
      }
    })
  }



}

