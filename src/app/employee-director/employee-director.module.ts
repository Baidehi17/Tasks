import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EmpResultComponent } from './emp-result/emp-result.component';

//primeng module
import { ToolbarModule } from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SideBarComponent,
    EmpResultComponent,
    SearchComponent,
  
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    SplitButtonModule,
    ButtonModule
  ],
  exports:[
    HeaderComponent,
    SearchComponent,
  ]
})
export class EmployeeDirectorModule { }
