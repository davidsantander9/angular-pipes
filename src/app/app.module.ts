import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import LocalEsMx from '@angular/common/locales/es-MX';
import LocalFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData( LocalEsMx );
registerLocaleData( LocalFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SalesModule,  
  ],
  exports: [
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Mx' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
