import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule);
=======
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
