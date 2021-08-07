import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';

//primeNg
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
