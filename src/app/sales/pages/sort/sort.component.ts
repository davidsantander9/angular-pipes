import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent{

  inUpperCase: boolean = false;

  constructor() { }

  toogle(){
    this.inUpperCase = !this.inUpperCase;
  }

}
