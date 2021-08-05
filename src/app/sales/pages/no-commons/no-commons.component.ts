import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  clients: string[] = ['Carolina', 'Luis', 'Juan','David'];

  clientsMap =  {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  deleteCliente(){
    this.clients.pop();
  }

  changeClient(){

    if( this.gender === 'M'){
      this.name = 'Gaby';
      this.gender = 'F';
    }else{
      this.name = 'David';
      this.gender = 'M';
    }
  }

  person = {
    name: 'Brandon',
    age: 25,
    address: 'Mexico City, Mexico',
  }

  heroes = [
    {
      name: 'Batman',
      flight: false,
    },
    {
      name: 'Superman',
      flight: true,
    },
    {
      name: 'Robin',
      flight: false,
    },
    {
      name: 'Aquaman',
      flight: false,
    },
  ];

  myObservable = interval(1000);

  promiseValue = new Promise( (res, rej ) => {
    setTimeout( () => {
      res('Promise end!');
    }, 3500)
  });




}
