import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[]): Hero[] {
    
    heroes = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1 )

    return heroes;
  }

}
