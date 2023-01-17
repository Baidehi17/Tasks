import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.scss']
})
export class EmpformComponent implements OnInit {

  @Output() popupButton :EventEmitter<any> = new EventEmitter();
  primengConfig: any;

  ngOnInit() { }
  constructor(private modelservice: NgbModal){}

 closeresult!: string;
 
 open(content: any) {
  this.popupButton.emit(content);
  //  this.modelservice.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
  //    this.closeresult = `Closed with: ${result}`;
  //  }, (reason: any) => {
  //    this.closeresult = `Dismissed ${this.getDismissReason(reason)}`;
  //  });
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
