import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// decorator
@NgModule({
  declarations: [ // only component, direcitve, pipe
    AppComponent,
    HeaderComponent
  ],
  imports: [  // dependent other modules
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // Dependency Injection: service
  bootstrap: [AppComponent] // main component
})

export class AppModule { } // controller
