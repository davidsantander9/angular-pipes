import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  constructor() { }

  name: string = 'David'
  gender: string = 'M';

  invitationMap = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

}
