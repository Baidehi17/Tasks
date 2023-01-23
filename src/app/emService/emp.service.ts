import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Empclass } from './empclass';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  empURL='http://localhost:7215/api/Employee';
  constructor(private http:HttpClient) {}
  getAllEmployee():Observable<Empclass[]>
  {
      return this.http.get<Empclass[]>(this.empURL);
  }
  AddEmployees(data:Empclass):Observable<any>
  {
    return this.http.post(this.empURL, data)
  }

  // jobCounting()
  // {
  //   this.getAllEmployee.
  // }
}
