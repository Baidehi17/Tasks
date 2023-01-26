import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpService } from 'src/app/emService/emp.service';
import { Empclass } from 'src/app/emService/empclass';
import { FilterServiceService } from 'src/app/emService/filter-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() clickedWord: EventEmitter<any> = new EventEmitter();
  @Output() searchjobs: EventEmitter<any> = new EventEmitter();
  @Input() employeeList!: Empclass[];

  jobcounts = {
    IT: 0,
    HumanResources: 0,
    MD: 0,
    Sales: 0,
    Seattle: 0,
    India: 0,
    SharePointPracticeHead: 0,
    DeveloperLeads: 0,
    RecrutingExpert: 0,
    BIDeveloper: 0,
    BussinessAnalysis: 0
  }
  constructor(private empservice: EmpService, private filterservice: FilterServiceService) {
  }
  sidebarmenus: any;
  ngOnInit(): void {

    this.empservice.getAllEmployee().subscribe
      (data => {
        this.employeeList = data;

        this.employeeList.forEach(emp => {
          if (emp.department == 'IT') { this.jobcounts.IT++; }
          if (emp.department == 'Human Resources') { this.jobcounts.HumanResources++; }
          if (emp.department == "MD") { this.jobcounts.MD++ }
          if (emp.department == "Sales") { this.jobcounts.Sales++ }
          if (emp.office == "Seattle") { this.jobcounts.Seattle++ }
          if (emp.office == "India") { this.jobcounts.India++ }
          if (emp.jobTitle == "SharePoint Practice Head") { this.jobcounts.SharePointPracticeHead++ }
          if (emp.jobTitle == ".Net Developer Leads") { this.jobcounts.DeveloperLeads++ }
          if (emp.jobTitle == "Recruting Expert") { this.jobcounts.RecrutingExpert++ }
          if (emp.jobTitle == "BI Developer") { this.jobcounts.BIDeveloper++ }
          if (emp.jobTitle == "Bussiness Analysis") { this.jobcounts.BussinessAnalysis++ }
        });

        this.sidebarmenus = [
          {

            title: 'departments',
            label: 'Departments',

            children: [
              'IT', 'Human Resources', 'MD', 'Sales'
            ],
            childcount: [this.jobcounts.IT, this.jobcounts.HumanResources, this.jobcounts.MD, this.jobcounts.Sales]

          },
          {
            title: 'offices',
            label: 'Offices',
            children: [
              'Seattle', 'India'
            ], childcount: [this.jobcounts.Seattle, this.jobcounts.India]
          },
          {
            title: 'job title',
            label: 'Job Title',
            children: [
              'SharePoint Practice Head', '.Net Developer Leads', 'Recruting Expert', 'BI Developer', 'Bussiness Analysis'
            ], childcount: [this.jobcounts.SharePointPracticeHead, this.jobcounts.DeveloperLeads, this.jobcounts.RecrutingExpert, this.jobcounts.BIDeveloper, this.jobcounts.BussinessAnalysis]
          }
        ]
        this.employeeList = data;
      })
    }

  searchs(jobs: any) {
    this.filterservice.jobs = jobs
    this.filterservice.sidesearch(jobs);
    //this.searchjobs.emit(word);
  }
}



