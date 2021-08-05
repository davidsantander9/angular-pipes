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
    'F': 'invitarla',
  }

  clientes: string[] = ['Carolina', 'Luis', 'Juan'];

  clientsMap =  {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

}
