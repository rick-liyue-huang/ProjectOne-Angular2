import { enableProdMode } from '@angular/core'; // close angular developement mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // main module
import { environment } from './environments/environment'; // config the different environment in pc or mobile

if (environment.production) {
  enableProdMode(); // if it is production, will close development mode
}

platformBrowserDynamic().bootstrapModule(AppModule); // start the main module in browsers
