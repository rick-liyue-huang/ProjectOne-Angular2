import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {SocketService} from "./header/socket.service";


const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockFormComponent}
];

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
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe
  ],
  imports: [  // dependent other modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService, SocketService], // Dependency Injection: service
  bootstrap: [AppComponent] // main component
})

export class AppModule { } // controller









































