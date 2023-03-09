
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/emService/constants';
import { FilterServiceService } from './../../emService/filter-service.service';
import { Router } from '@angular/router';
import { Empclass } from 'src/app/emService/empclass';
import { EventService } from 'src/app/emService/eventService';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fields = Constants.employeeFields;
 
  ngOnInit() { }


  //content= this.contents
  constructor(private modelservice: NgbModal, private filterservice: FilterServiceService) { }

  searchButton = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  user!:Empclass;
  open()
  {
    EventService.employeeEvent.emit();
  }



  refreshpage(refresh: any) {
    this.filterservice.refreshFilter(refresh);
  }
  
  //input Search Box
  SearchWord(value: any) {
    this.filterservice.inbox(value);
  }
  //dropdown
  searchFilter(jobsfilter: number) {
    this.filterservice.dropdownsearch(jobsfilter);
  }

  //get emp matching A TO Z
  clicked(letter: any) {
    this.filterservice.letterSearch(letter)
  }

  //Add new employee
  Addnewemployee(newemployee: NgForm, data: any) {
    if (newemployee.invalid) {
      return
    }
    else if (!newemployee.invalid) {
      this.filterservice.addemployee(data);
      this.modelservice.dismissAll(); // dissmis the table
    }
  }
 
  dropDownfilter(filterIndex:number){
  console.log(filterIndex)
   }
   titleCase(text: string): string 
   { if (!text || text === null || text === undefined) { return ''; } text = text.replace(/([A-Z])/g, " $1"); let str = text.split(' '); for (var i = 0; i < str.length; i++) { str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); return str.join(' '); } return ''; }
}

