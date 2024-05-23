import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimaryLayoutComponent,
    AuthModule.forRoot({
      domain: 'dev-hbswmngt.us.auth0.com',
      clientId: 'VCI3F7dNI3ATdlGswcwpEuN83pHUxeAr',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
