import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EmpResultComponent } from './emp-result/emp-result.component';
import { EmpformComponent } from './empform/empform.component';

//primeng module
import { ToolbarModule } from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LayoutComponent } from './layout/layout.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    EmpResultComponent,
    SearchComponent,
    LayoutComponent,
    EmpformComponent,
    

  
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    SplitButtonModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LayoutComponent,
    EmpformComponent,
    

  ]
})
export class EmployeeDirectorModule { }
