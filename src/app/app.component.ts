import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'david';
  value: number = 1000;
  obj = {
    name: 'david 2'
  }

  showName(){
    console.log( this.name );
  }
}
