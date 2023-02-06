import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class EventService{
    public static employeeEvent = new EventEmitter();
    public static reloadData = new EventEmitter();

}