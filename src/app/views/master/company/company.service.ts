import { Injectable } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { AppConstant } from './../../../app.constant';
import { Observable } from 'rxjs/Observable';
=======
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../../app.constant';
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../../app.constant';
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import { Company } from './company.model';

@Injectable()
export class CompanyService {
<<<<<<< HEAD
<<<<<<< HEAD

    private resourceUrl = this.a.SERVER_URL + '/company';
    private resourceUrlPaging = this.a.SERVER_URL + '/company/page/0/size/20';

    constructor(private http: HttpClient, private a: AppConstant) { }

    getAll(): Observable<any> {
        return this.http.get(this.resourceUrl + '/filter?search=activationCode!N');
    }

    save(company: Company): Observable<any> {
        console.log('company : ', company);
        return this.http.post(this.resourceUrl, company);
        // return null;
    }

    update(id: any, company: Company): Observable<any> {
        return this.http.put(this.resourceUrl + '/' + id, company);
    }

    delete(data: any): Observable<any> {
        data.activationCode = 'N';
        return this.http.put(this.resourceUrl + '/' + data.id, data)
    }

    getAllDropDown(): Observable<any> {
        return this.http.get(this.resourceUrl + '/dropdown');
    }

    getById(id: any): Observable<any> {
        return this.http.get(this.resourceUrl + '/' + id);
    }
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
  private resourceUrlCompany = this.a.SERVER_URL + '/master/Company';
  private resourceUrlRoleAuth = this.a.SERVER_URL + '/role_menu_authorization';
  private resourceUrlMenu = this.a.SERVER_URL + '/menu_tab';

  constructor(private http: HttpClient, private a: AppConstant) {}

  getById(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlCompany + '/retrieve?token=' + token + '&company_code=' + "'" + id + "'")
  }

  getLimit(offset,limit): Observable<any> {
    offset = Number(offset)*Number(limit);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    console.log(this.resourceUrlCompany + '/table?offset=' + offset + '&limit='+limit);
    return this.http.post < any > (this.resourceUrlCompany+'/table?offset='+offset+'&limit='+limit, {
      username : username,
      token : token
    })
  }

  getAll(): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    return this.http.post < any > (this.resourceUrlCompany + '/table', {
      username : username,
      token : token
    })
  }

  save(data: Company): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);
    // data.createdate = today;
    // data.createdby = username;
    // data.isallowregistration = 1;
    return this.http.post < any > (this.resourceUrlCompany + '/insert', data)
  }

  update(data: Company): Observable<any> {
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
    return this.http.post < any > (this.resourceUrlCompany + '/update', data)
  }

  delete(data: any): Observable<any> {
    /* data.activationCode = 'N';
    return this.http.put(this.resourceUrlRole + '/' + data.role_id, data)*/
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlCompany + '/delete?token=' + token + '&company_code=' + data.company_code)
  }

  getByName(roleName: any): Observable<any> {
    return this.http.get(this.resourceUrlCompany + '/filter?search=roleName:' + roleName.toString().toUpperCase());
  }

  saveRoleAuth(data: any) {
    return this.http.post(this.resourceUrlRoleAuth, data)
  }

  updateRoleAuth(data: any) {
    return this.http.put(this.resourceUrlRoleAuth + '/' + data.authId, data)
  }

  getByData(data: any): Observable<any> {
    return this.http.get(this.resourceUrlCompany +
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
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
}
