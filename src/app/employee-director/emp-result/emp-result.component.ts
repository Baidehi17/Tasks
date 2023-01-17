
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmpService } from './../../emService/emp.service';
import { Empclass } from './../../emService/empclass';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-emp-result',
  templateUrl: './emp-result.component.html',
  styleUrls: ['./emp-result.component.scss']
})
export class EmpResultComponent implements OnInit {

  //constructor(private empservice: EmpService) { }
  @Input() employeeList!: Empclass[];
  @Input() clickedWord!: [];
  @Output() updateEmployee: EventEmitter<any> = new EventEmitter();
  @Output() forms:EventEmitter<any> = new EventEmitter();

  //  @ViewChild('updatemployee') form!: NgForm;
  @ViewChild('updatemployee') form!:NgForm;
  
  constructor( private http:HttpClient ,private modelservice: NgbModal , private formbuilder:FormBuilder, private empservice:EmpService) { }

  editForm!:FormGroup;
  ngOnInit() : void
  {
    this.empservice.getAllEmployee().subscribe(data => {
    this.employeeList = data});
    this.editForm=this.formbuilder.group({
      fristName :[''], 
      lastName :[''],
      preferredName :[''],
      email :[''],
      jobTitle :[''],
      office :[''],
      department :[''],
      phoneNumber :[''],
      skypeId :['']
    });
   }
   openEdit(targetModal: any, emp:Empclass) {
    this.modelservice.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      fristName : emp.fristName,
      lastName : emp.lastName,
      preferredName : emp.preferredName,
      email : emp.email,
      jobTitle : emp.jobTitle,
      office : emp.office,
      department : emp.department,
      phoneNumber : emp.phoneNumber,
      skypeId : emp.skypeId,
    });
  }
  updateEmp() {
    const editURL = 'http://localhost:7215/api/Employee/' + this.editForm.value.id ;
    console.log(this.editForm.value);
    this.http.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modelservice.dismissAll();
    });
  }
  deleteId!:number;
  openDelete(targetModal:any, emp:Empclass) {
    this.deleteId = emp.skypeId;
    this.modelservice.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onDelete() {
    const deleteURL = 'http://localhost:7215/api/Employee/' + this.deleteId;
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modelservice.dismissAll();
      });
  }
  //pop up of form
  closeresult!: string;
  open(content: any) {
    this.modelservice.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeresult = `Closed with: ${result}`;
    }, (reason: any) => {
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
