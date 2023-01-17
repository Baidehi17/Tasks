import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   @Output() Addemployee:EventEmitter<any> = new EventEmitter();
   @Output() clickedWord: EventEmitter<any> = new EventEmitter();
   @Output() searchBox:EventEmitter<any> = new EventEmitter();
   @Output() searchFilters:EventEmitter<any> = new EventEmitter();
    ngOnInit() {}

    searchButton=[
    'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]
    // Search Box
    SearchWord(value:any)
    {
      this.searchBox.emit(value);
    }
    searchFilter(value:any)
    {
      this.searchFilters.emit(value);
    }
    //get emp matching A TO Z
    clicked(event:any)
   {
    this.clickedWord.emit(event)
   }

   //Add new employee
   Addnewemployee(data:any)
   {
    this.Addemployee.emit(data);
    this.modelservice.dismissAll(); // dissmis the table
    alert("submit successfully");
   }
  
  //popup add employee form  
  closeresult!:string;
  constructor(private modelservice:NgbModal){}
 
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

