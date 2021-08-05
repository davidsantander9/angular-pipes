import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name: string = 'david';
  value: number = 1000;
  obj = {
    name: 'david 2'
  }

  constructor(private primeNGConfig: PrimeNGConfig) {
    
  }

  showName(){
    console.log( this.name );
  }
  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
}
