import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
