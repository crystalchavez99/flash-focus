import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';
import { provideAnimations } from '@angular/platform-browser/animations';


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
  providers: [AuthService, provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule{}
