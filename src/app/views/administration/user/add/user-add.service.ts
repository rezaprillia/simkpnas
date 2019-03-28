import { Injectable } from '@angular/core';
import { AppConstant } from 'app/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Service {
<<<<<<< HEAD
<<<<<<< HEAD
    private resourceUrlRole = this.a.SERVER_URL + '/user_role';
=======
    private resourceUrlRole = this.a.SERVER_URL + '/system/UserRole';
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
    private resourceUrlRole = this.a.SERVER_URL + '/system/UserRole';
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    constructor(private http: HttpClient, private a: AppConstant) { }
     getAllRole(): Observable<any> {
        return this.http.get(this.resourceUrlRole)
    }
}
