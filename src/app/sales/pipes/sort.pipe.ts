import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], sortby: string = ''): Hero[] {

    switch ( sortby ) {
      case 'name':
        return heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1 );
      case 'flight':
        return heroes.sort( (a,b) => (a.flight > b.flight) ? -1 : 1 )
      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 )
      default:
        return heroes;
    }
  
  }

}
