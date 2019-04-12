// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SystemUserService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../../app.constant';
import { SystemUser } from './system-user.model';

@Injectable()
export class SystemUserService {
  private resourceUrlSystemUser = this.a.SERVER_URL + '/system/SystemUser';
  private resourceUrlRoleAuth = this.a.SERVER_URL + '/role_menu_authorization';
  private resourceUrlMenu = this.a.SERVER_URL + '/menu_tab';
  private resourceUrlFile = this.a.SERVER_URL + '/master/Perjanjian';

  constructor(private http: HttpClient, private a: AppConstant) {}

  getById(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlSystemUser + '/retrieve?token=' + token + '&npeg=' + "'" + id + "'")
  }

  getLimit(offset,limit): Observable<any> {
    offset = Number(offset)*Number(limit);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    console.log(this.resourceUrlSystemUser + '/table?offset=' + offset + '&limit='+limit);
    return this.http.post < any > (this.resourceUrlSystemUser+'/table?offset='+offset+'&limit='+limit, {
      username : username,
      token : token
    })
  }

  getAll(): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    return this.http.post < any > (this.resourceUrlSystemUser + '/table', {
      username : username,
      token : token
    })
  }

  save(data: SystemUser): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);s
    // data.createdate = today;
    // data.createdby = username;
    // data.isallowregistration = 1;
    return this.http.post < any > (this.resourceUrlSystemUser + '/insert', data);
  }

  update(data: SystemUser): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);
    // data.updatedate = today;
    // data.updatedby = username;
    // console.log('isdisplayed = ' + data.isdisplayed);
    console.log(data);
    /*
    if (data.isallowregistration = false) {
      data.isallowregistration = '1';
    } else {
      data.isallowregistration = '0';
    }
    */
    return this.http.post < any > (this.resourceUrlSystemUser + '/update', data)
  }

  delete(data: any): Observable<any> {
    /* data.activationCode = 'N';
    return this.http.put(this.resourceUrlRole + '/' + data.role_id, data)*/
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlSystemUser + '/delete?token=' + token + '&npeg=' + data.npeg)
  }

  getByName(nama: any): Observable<any> {
    return this.http.get(this.resourceUrlSystemUser + '/table?nama=' + nama.toUpperCase());
  }

  getByNpeg(npeg: any): Observable<any> {
    return this.http.get(this.resourceUrlSystemUser + '/table?npeg=' + npeg);
  }

  saveRoleAuth(data: any) {
    return this.http.post(this.resourceUrlRoleAuth, data)
  }

  updateRoleAuth(data: any) {
    return this.http.put(this.resourceUrlRoleAuth + '/' + data.authId, data)
  }

  getByData(data: any): Observable<any> {
    return this.http.get(this.resourceUrlSystemUser +
      '/filter?search=id:' + data.id +
      ',roleName:' + data.roleName.toString().toUpperCase() +
      ',description:' + data.description
    );
  }



  getAllMenu(): Observable<any> {
    return this.http.get(this.resourceUrlMenu)
  }

  getAllRoleAuth(): Observable<any> {
    return this.http.get(this.resourceUrlRoleAuth)
  }

  deleteRoleAuth(id: any): Observable<any> {
    return this.http.delete(this.resourceUrlRoleAuth + '/' + id)
  }
}
