import { Injectable } from '@angular/core';
import { AppConstant } from 'app/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Service {
<<<<<<< HEAD
    private resourceUrlRole = this.a.SERVER_URL + '/system/UserRole';
=======
    private resourceUrlRole = this.a.SERVER_URL + '/user_role';
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
    constructor(private http: HttpClient, private a: AppConstant) { }
     getAllRole(): Observable<any> {
        return this.http.get(this.resourceUrlRole)
    }
}
