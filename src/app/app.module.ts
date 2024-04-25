import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
