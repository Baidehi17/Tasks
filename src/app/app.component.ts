import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from './emService/eventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('content') contentRef!: TemplateRef<any>;
  title = 'Tasks';
  isOpen = false;
  empId:number =0;
  closeResult: string = '';

  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
    EventService.employeeEvent.subscribe(res => {
      if(res){
        this.empId = res.skypeId;
      }
      else{
        this.empId=0;
      }
      this.openForm();
    });
  }

  openForm(){
    this.open(this.contentRef);
  }

  onSave(){
  }
  updateEmp()
  {
    
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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

