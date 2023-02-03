import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks';
  searchButtons()
  {
    for(let i=97;i<=122;i++)
    {
      console.log(i)
    }
  }
}

