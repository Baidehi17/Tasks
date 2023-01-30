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
  }

  letterAtoZ: any;
  dropdownSearch: any;
  inboxSearch: any;
  jobs: any;

 
  addemployee(employeeData:any)
  {
    this.empservice.AddEmployees(employeeData).subscribe(data=>{
      this.filterdEmplist = this.employeeList; 
      this.connectFilter.next(this.filterdEmplist) //relaod the table
    })
  }

  connectFilter = new Subject<any>();
  connectingFilter(para: any) {
    this.empservice.getAllEmployee().subscribe(data => {
      // this.employeeList = data;
      this.filterdEmplist = this.employeeList = data;

      if (this.dropdownSearch == null) {
        if (this.letterAtoZ != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ));
          this.connectFilter.next(this.filterdEmplist);
          if (this.jobs != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);
          
          if (this.inboxSearch != null) {
            this.filterdEmplist = this.employeeList.filter(x =>x.fristName.toLowerCase().includes(this.letterAtoZ.toLowerCase()) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);}
          }
        }
        if (this.jobs != null) {
          this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase()))))
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);
          }
          if (this.inboxSearch != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
          }
        }
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
            if (this.jobs != null) {
              this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
              this.connectFilter.next(this.filterdEmplist);
            }  
          }
          if (this.jobs != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase()))) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()) )
            this.connectFilter.next(this.filterdEmplist);
            if (this.letterAtoZ != null) {
              this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
              this.connectFilter.next(this.filterdEmplist);}
          }
        }
      }

      if (this.dropdownSearch == 'Name') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
            if (this.jobs != null) {
              this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
              this.connectFilter.next(this.filterdEmplist);
            }
          }
        }
        if (this.letterAtoZ != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ));
          this.connectFilter.next(this.filterdEmplist);
          if (this.jobs != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);
          
          if (this.inboxSearch != null) {
            this.filterdEmplist = this.employeeList.filter(x =>x.fristName.toLowerCase().includes(this.letterAtoZ.toLowerCase()) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);}
          }
        }
      }
      else if (this.dropdownSearch == 'LastName') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.lastName.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
            if (this.jobs != null) {
              this.filterdEmplist = this.employeeList.filter(x => (x.lastName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
              this.connectFilter.next(this.filterdEmplist);
            }
          }
        }
        if (this.letterAtoZ != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.fristName.toLowerCase().startsWith(this.letterAtoZ));
          this.connectFilter.next(this.filterdEmplist);
          if (this.jobs != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.fristName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);
          
          if (this.inboxSearch != null) {
            this.filterdEmplist = this.employeeList.filter(x =>x.fristName.toLowerCase().includes(this.letterAtoZ.toLowerCase()) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);}
          }
        }
      }
      else if (this.dropdownSearch == 'PreferredName') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.preferredName.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
            if (this.jobs != null) {
              this.filterdEmplist = this.employeeList.filter(x => (x.preferredName.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
              this.connectFilter.next(this.filterdEmplist);
            }
          }
        }
      }
      else if (this.dropdownSearch == 'Email') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().includes(this.inboxSearch.toLowerCase()));
          this.connectFilter.next(this.filterdEmplist);
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => x.email.toLowerCase().startsWith(this.letterAtoZ) && x.fristName.toLowerCase().includes(this.inboxSearch.toLowerCase()));
            this.connectFilter.next(this.filterdEmplist);
          }
          if (this.letterAtoZ != null) {
            this.filterdEmplist = this.employeeList.filter(x => (x.email.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
            this.connectFilter.next(this.filterdEmplist);
            if (this.jobs != null) {
              this.filterdEmplist = this.employeeList.filter(x => (x.email.toLowerCase().startsWith(this.letterAtoZ)) && ((x.department.toLowerCase().includes(this.jobs.toLowerCase()) || (x.office.toLowerCase().includes(this.jobs.toLowerCase())) || (x.jobTitle.toLowerCase().includes(this.jobs.toLowerCase())))));
              this.connectFilter.next(this.filterdEmplist);
              
            }
          }
        }
      }
      else if (this.dropdownSearch == 'Department') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.department.toLowerCase().includes(this.inboxSearch));
          this.connectFilter.next(this.filterdEmplist);
          if(this.letterAtoZ!=null)
          {
            this.filterdEmplist=this.employeeList.filter(x=> x.department.toLowerCase().includes(this.inboxSearch) && x.fristName.toLowerCase().startsWith(this.letterAtoZ))
            this.connectFilter.next(this.filterdEmplist);
          }
        }
      }
      else if (this.dropdownSearch == 'jobTitle') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.jobTitle.toLowerCase().includes(this.inboxSearch));
          this.connectFilter.next(this.filterdEmplist);
          if(this.letterAtoZ!=null)
          {
            this.filterdEmplist=this.employeeList.filter(x=> x.jobTitle.toLowerCase().includes(this.inboxSearch) && (x.fristName.toLowerCase().startsWith(this.letterAtoZ)))
            this.connectFilter.next(this.filterdEmplist);
          }
        }
      }
      else if (this.dropdownSearch == 'Office') {
        if (this.inboxSearch != null) {
          this.filterdEmplist = this.employeeList.filter(x => x.office.toLowerCase().includes(this.inboxSearch));
          this.connectFilter.next(this.filterdEmplist);
          if(this.letterAtoZ!=null)
          {
            this.filterdEmplist=this.employeeList.filter(x=> x.office.toLowerCase().includes(this.inboxSearch) && x.fristName.toLowerCase().startsWith(this.letterAtoZ))
            this.connectFilter.next(this.filterdEmplist);
          }
        }
      }
    })
  }

  refreshFilter(refresh: any) {
    this.filterdEmplist = this.employeeList;
    this.connectFilter.next(this.filterdEmplist)
    if (refresh == '') {
      this.letterAtoZ = null;
      this.inboxSearch = null;
      this.dropdownSearch = null;
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

