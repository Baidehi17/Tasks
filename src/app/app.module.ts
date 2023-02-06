import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeDirectorModule } from './employee-director/employee-director.module';
import {  EmpService} from './emService/emp.service';
import { HttpClientModule } from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//primeng module

import {AccordionModule} from 'primeng/accordion';  
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FilterServiceService } from './emService/filter-service.service';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    EmployeeDirectorModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
    ToolbarModule,
    SplitButtonModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    
  ],
  providers: [EmpService,FilterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
