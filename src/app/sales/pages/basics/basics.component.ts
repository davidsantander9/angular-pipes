import { Component} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'david';
  nameUpper: string = 'DAVID';
  nameComplete: string = 'dAVid c SAntanDeR';

  constructor() { }

}
