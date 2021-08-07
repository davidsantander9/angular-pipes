import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent{

  inUpperCase: boolean = false;

  heroes: Hero[] = [
    {
      name: 'Superman',
      flight: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flight: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flight: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flight: true,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flight: true,
      color: Color.green
    },
  ]

  toogle(){
    this.inUpperCase = !this.inUpperCase;
  }

}
