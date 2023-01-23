import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FilterServiceService} from './../../emService/filter-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
   @Output() Addemployee:EventEmitter<any> = new EventEmitter(); //emp add
   @Output() clickedWord: EventEmitter<any> = new EventEmitter(); //search A to Z
   @Output() searchBox:EventEmitter<any> = new EventEmitter(); // input search box
   @Output() searchFilters:EventEmitter<any> = new EventEmitter(); //dropdown
   @Output() refreshPage:EventEmitter<any>=new EventEmitter();
    ngOnInit() {}
   
    constructor(private modelservice:NgbModal ,private filterservice:FilterServiceService){}

    searchButton=[
    'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]
    refreshpage()
    {
      this.refreshPage.emit();
    }
    //input Search Box
    SearchWord(value:any)
    {
      this.filterservice.inboxSearch=value;
      this.filterservice.connectfilter();
      //this.searchBox.emit(value);
    }
    //dropdown
    searchFilter(jobsfilter:any)
    {
      this.filterservice.dropdownSearch=jobsfilter
      this.filterservice.connectfilter();
      //this.searchFilters.emit(jobfilter);
    }
    //get emp matching A TO Z
    //letter:any;
    clicked(letter:any)
   {
    //this.letter=letter;
    this.filterservice.letter=letter;
    this.filterservice.connectfilter();

   // this.clickedWord.emit(letter)
   }

   //Add new employee
  //  newemployee!:NgForm
   
   Addnewemployee(newemployee: NgForm, data:any)
   {
    if(newemployee.invalid)
    {
      return
    }
    else if(!newemployee.invalid)
    {
      this.Addemployee.emit(data);
      this.modelservice.dismissAll(); // dissmis the table
    }
   }
  
     //popup add employee form  
  closeresult!:string;
 
 
 open(content: any) {
   this.modelservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeresult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeresult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
 
 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return `with: ${reason}`;
   }
 }
}

