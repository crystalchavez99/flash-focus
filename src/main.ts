import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    provideAuth0({
      domain: 'dev-hbswmngt.us.auth0.com',
      clientId: 'VCI3F7dNI3ATdlGswcwpEuN83pHUxeAr',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
})
  .catch(err => console.error(err));
