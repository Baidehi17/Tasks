import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  sidebarmenu=[
  'Department','IT','Human Resource','MD','Sales','office','seattles','india','job title','sharePoint practice heads','.Net Develeoper Leads','Reqcruiting Experts', 'Bi Developer','Bussiness Analyis'
]
  
sidebarmenus=[
  {
   title: 'departments',
   label: 'Departments',
   children:[    
        'IT','Human Resource','MD','Sales'    
   ] 
  },
  {
    title: 'offices',
    label: 'Offices',
    children:[    
         'Seattle','India'    
    ] 
   },
   {
    title: 'job title',
    label: 'Job Title',
    children:[    
         'SharePoint Practice Head','.Net Developer Leads','Recruting Expert','BI Developer','Bussiness Analysis'    
    ] 
   }
]
}

