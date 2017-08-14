import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';

// decorator
@NgModule({
  declarations: [ // only component, direcitve, pipe
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    StockManageComponent,
    StarsComponent
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
