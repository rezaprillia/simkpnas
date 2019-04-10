// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PositionService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../../app.constant';
import { SysUser, KategoriAktif} from './sys-user.model';

const simpleProducts: string[] = [ 'Y', 'N' ];
const daftarKategori: KategoriAktif[] = [{
  'ID': 0,
  'Nama': 'Non-Aktif'
}, {
  'ID': 1,
  'Nama': 'Aktif'
}];

// const daftarRole: DaftarRole[] = [{
//   'role_id': 4,
//   'nama': 'Admin'
// }, {
//   'role_id': 3,
//   'nama': 'Bawahan'
// }, {
//   'role_id': 2,
//   'nama': 'Atasan'
// }];

// const daftarJabatan: DaftarJabatan[] = [{
//     'idpos': '1',
//     'position_title' : 'GENERAL MANAGER'
// }, {
//     'idpos' : '2',
//     'position_title' : 'MANAGER'
// }, {
//     'idpos' : '3',
//     'position_title' : 'OFFICER'
// }, {
//     'idpos' : '4',
//     'position_title' : 'SUPERVISOR'
// }]

var arrRoleId = new Array()   ;

@Injectable()
export class SysUserService {
  private resourceUrlUser = this.a.SERVER_URL + '/system/SystemUser';
  private resourceUrlRoleAuth = this.a.SERVER_URL + '/role_menu_authorization';
  private resourceUrlMenu = this.a.SERVER_URL + '/menu_tab';
  private resourceUrlRole = this.a.SERVER_URL + '/system/UserRole';
  private resourceUrlJabatan = this.a.SERVER_URL + '/master/Position';
  private resourceUrlOrganisasi = this.a.SERVER_URL + '/master/Organization';

  constructor(private http: HttpClient, private a: AppConstant) {}

  getSimpleProducts(): string[] {
    return simpleProducts;
  }

  getDaftarKategori(): KategoriAktif[] {
    return daftarKategori;
  }

  // getDaftarRole(): DaftarRole[] {
  //   return daftarRole;
  // }

  // getDaftarJabatan(): DaftarJabatan[] {
  //   return daftarJabatan;
  // }

  getById(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlUser + '/retrieve?token=' + token + '&userid=' + "'" + id + "'")
  }

  getLimit(offset,limit): Observable<any> {
    offset = Number(offset)*Number(limit);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    console.log(this.resourceUrlUser + '/table?offset=' + offset + '&limit='+limit);
    return this.http.post < any > (this.resourceUrlUser+'/table?offset='+offset+'&limit='+limit, {
      username : username,
      token : token
    })
  }

  getAll(): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    return this.http.post < any > (this.resourceUrlUser + '/table', {
      username : username,
      token : token
    })
  }

  save(data: SysUser): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);
    // data.createdate = today;
    // data.createdby = username;
    // data.isallowregistration = 1;
    return this.http.post < any > (this.resourceUrlUser + '/insert', data)
  }

  update(data: SysUser): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date();
    data.modified_date = today;
    data.modified_by = username;
    // console.log('isdisplayed = ' + data.isdisplayed);
    console.log(data);
    /*
    if (data.isallowregistration = false) {
      data.isallowregistration = '1';
    } else {
      data.isallowregistration = '0';
    }
    */
    return this.http.post < any > (this.resourceUrlUser + '/update', data)
  }

  delete(data: any): Observable<any> {
    /* data.activationCode = 'N';
    return this.http.put(this.resourceUrlRole + '/' + data.role_id, data)*/
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlUser + '/delete?token=' + token + '&idpos=' + data.idpos)
  }

  getByName(roleName: any): Observable<any> {
    return this.http.get(this.resourceUrlUser + '/filter?search=roleName:' + roleName.toString().toUpperCase());
  }

  saveRoleAuth(data: any) {
    return this.http.post(this.resourceUrlRoleAuth, data)
  }

  updateRoleAuth(data: any) {
    return this.http.put(this.resourceUrlRoleAuth + '/' + data.authId, data)
  }

  getByData(data: any): Observable<any> {
    return this.http.get(this.resourceUrlUser +
      '/filter?search=id:' + data.id +
      ',roleName:' + data.roleName.toString().toUpperCase() +
      ',description:' + data.description
    );
  }

  getAllMenu(): Observable<any> {
    return this.http.get(this.resourceUrlMenu)
  }

  getAllRole(): Observable < any > {
    return this.http.get(this.resourceUrlRole + '/table')
  }

  // getAllRoleID(): Observable < any >///////////////// {
  //   arrRoleId.push(this.http.get(this.resourceUrlRole + '/table'));
  //   return arrRoleId;
  // }

  getRoleByID(data: any): Observable < any > {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlUser + '/retrieve?token=' + token + '&role_id=' + "'" + data + "'")
    //return this.http.get(this.resourceUrlRole + '/filter?search=id:' + data);
  }

  getAllJabatan(): Observable <any> {
    return this.http.get(this.resourceUrlJabatan + '/keyval')
  }

  getJabatanByID(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlJabatan + '/retrieve?token=' + token + '&idpos=' + "'" + data + "'")
    //return this.http.get(this.resourceUrlJabatan + '/filter?search=id:' + data);
  }

  getAllEntitas(): Observable <any> {
    return this.http.get(this.resourceUrlOrganisasi)
  }

  getEntitasByID(data: any): Observable<any> {
    return this.http.get(this.resourceUrlOrganisasi + '/filter?search=id:' + data);
  }

  getAllRoleAuth(): Observable<any> {
    return this.http.get(this.resourceUrlRoleAuth)
  }

  deleteRoleAuth(id: any): Observable<any> {
    return this.http.delete(this.resourceUrlRoleAuth + '/' + id)
  }
}
