import { Component, OnInit } from '@angular/core';
import { EmpService } from './../../emService/emp.service';
import { Empclass } from './../../emService/empclass';
@Component({
     selector: 'app-emp-result',
     templateUrl: './emp-result.component.html',
     styleUrls: ['./emp-result.component.scss']
})
export class EmpResultComponent implements OnInit {

     constructor(private empservice: EmpService) { }
     employeeList!: Empclass[];
     ngOnInit() {

          
          this.empservice.getcommants()
               .subscribe
               (
                    data => {
                         this.employeeList = data;
                    }
               );
     }

     
}
