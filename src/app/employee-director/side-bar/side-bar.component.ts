import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpService } from 'src/app/emService/emp.service';
import { Empclass } from 'src/app/emService/empclass';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() clickedWord: EventEmitter<any> = new EventEmitter();
  @Output() searchjobs: EventEmitter<any> = new EventEmitter();
  @Input() employeeList!: Empclass[];
  @Input() jobcount={}
  constructor(private empservice: EmpService) {
  }
  ngOnInit(): void {
  }
  
  // jobcount={
  //   IT:0
  // }
  // totalcount=0;

  // counting(jobcount: string)
  // {
  //   this.empservice.getAllEmployee().subscribe
  //   (data=>{this.employeeList=data;
    
  //     const counts= this.sidebarmenus;

  //     this.employeeList.filter(e=>e.department==jobcount).length;
  //   })
    
  // }
  // getcount()
  // {
  //   this.empservice.getAllEmployee().subscribe
  //   (data=>{this.employeeList=data;
      
  //   //this.totalcount=this.employeeList.length;
  //   //this.employeeList.f
  //    this.employeeList.forEach(emp=>{
  //       if(emp.department=='IT')
  //       {
  //         this.jobcount.IT++
  //       }
  
  //    });
     

  //   })
  // }
  sidebarmenus = [
    {
      
      title: 'departments',
      label: 'Departments',
      children: [

        `IT` , 'Human Resources', 'MD', 'Sales'
      ]
    },
    {
      title: 'offices',
      label: 'Offices',
      children: [
        'Seattle', 'India'
      ]
    },
    {
      title: 'job title',
      label: 'Job Title',
      children: [
        'SharePoint Practice Head', '.Net Developer Leads', 'Recruting Expert', 'BI Developer', 'Bussiness Analysis'
      ]
    }
  ]

  searchs(word: any) {
    this.searchjobs.emit(word);

  }
  clicked(event: any) {
    this.clickedWord.emit(event)
  }

}



