import { Injectable } from '@angular/core';
import { AppConstant } from 'app/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class SysUserAddService {
  private resourceUrlRole = this.a.SERVER_URL + '/system/UserRole';
    constructor(private http: HttpClient, private a: AppConstant) { }
     getAllRole(): Observable<any> {
        return this.http.get(this.resourceUrlRole)
    }
}
