import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/emService/constants';
import { FilterServiceService } from './../../emService/filter-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fields = Constants.employeeFields;
  @Output() Addemployee: EventEmitter<any> = new EventEmitter(); //emp add
  @Output() clickedWord: EventEmitter<any> = new EventEmitter(); //search A to Z
  @Output() searchBox: EventEmitter<any> = new EventEmitter(); // input search box
  @Output() searchFilters: EventEmitter<any> = new EventEmitter(); //dropdown
  @Output() refreshPage: EventEmitter<any> = new EventEmitter();
  ngOnInit() { }

  constructor(private modelservice: NgbModal, private filterservice: FilterServiceService) { }

  searchButton = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

 



  refreshpage(refresh: any) {
    this.filterservice.refreshFilter(refresh);
    // this.refreshPage.emit();
  }
  //input Search Box
  SearchWord(value: any) {
    this.filterservice.inbox(value);
    //this.searchBox.emit(value);
  }
  //dropdown
  searchFilter(jobsfilter: number) {
    this.filterservice.dropdownsearch(jobsfilter);
    //this.searchFilters.emit(jobfilter);
  }

  //get emp matching A TO Z
  clicked(letter: any) {
    this.filterservice.letterSearch(letter)
    // this.clickedWord.emit(letter)
  }

  //Add new employee
  Addnewemployee(newemployee: NgForm, data: any) {
    if (newemployee.invalid) {
      return
    }
    else if (!newemployee.invalid) {
      // this.Addemployee.emit(data);
      this.filterservice.addemployee(data);
      this.modelservice.dismissAll(); // dissmis the table
    }
  }
  //popup add employee form  
  closeresult!: string;
  open(content: any) {
    this.modelservice.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  dropDownfilter(filterIndex:number){
   }

   
   titleCase(text: string): string { if (!text || text === null || text === undefined) { return ''; } text = text.replace(/([A-Z])/g, " $1"); let str = text.split(' '); for (var i = 0; i < str.length; i++) { str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); return str.join(' '); } return ''; }
}

