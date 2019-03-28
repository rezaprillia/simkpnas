

import {
  Injectable,
  Inject,
  isDevMode
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class AppConstant {
  public SERVER_URL;

  constructor( @Inject(DOCUMENT) private document) {
    if (isDevMode()) {
      // this.SERVER_URL = 'http://portalapp.iconpln.co.id:1366';
      // this.SERVER_URL = 'http://10.14.153.41:1366';
      // this.SERVER_URL = 'http://localhost:1366';
      // icofr
<<<<<<< HEAD
      // this.SERVER_URL = 'http://10.14.22.209:8080/simkp-webservice';
      this.SERVER_URL = 'http://localhost:9092';  //server local
=======
      this.SERVER_URL = 'http://localhost:9092';
      //
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
    } else {
      this.SERVER_URL = document.location.protocol + '//' +
        document.location.hostname + ':' +
        '9092';

    }
  }
}
