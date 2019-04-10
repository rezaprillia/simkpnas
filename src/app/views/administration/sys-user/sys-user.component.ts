// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sys-user',
//   templateUrl: './sys-user.component.html',
//   styleUrls: ['./sys-user.component.scss']
// })
// export class SysUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import {
  AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {DxDataGridComponent, DxCheckBoxComponent} from 'devextreme-angular';
import {Search} from './sys-user.model';
import {SysUserService} from './sys-user.service';
import notify from 'devextreme/ui/notify';
import {convertRuleOptions} from 'tslint/lib/configuration';
import DataSource from 'devextreme/data/data_source';
import data_grid from 'devextreme/ui/data_grid';
declare const $: any;

@Component({
  selector: 'app-sys-user',
  templateUrl: './sys-user.component.html',
  styleUrls: ['./sys-user.component.scss'],
  providers: [SysUserService]
})
export class SysUserComponent implements AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  contextItems: any;
  target: any;
  addVisible = false;
  menuVisible = false;
  detail: any;
  detailUsers: any;
  detailUserss: any;
  detailUsersHeader: any;
  text: any;
  popupVisible = false;
  confVisible = false;
  progressVisible = false;
  progressTitle: any;
  progressContent: any;
  roles: any[];
  jabatans: any[];
  entitas: any[];

  //roles: any[];
  gridDataSource: any = {};
  npeg: any;
  nama: any;
  password: any;
  gelar: any;
  pendidikan: any;
  tgl_masuk: any;
  tgl_capeg: any;
  tgl_pegawai_tetap: any;
  jenis_pegawai: any;
  tgl_pensiun: any;
  tgl_lahir: any;
  jenis_kelamin: any;
  gol_darah: any;
  agama: any;
  status: any;
  alamat: any;
  kota: any;
  kodepos: any;
  grade: any;
  email: any;
  posisi: any;
  jabatan_id: any;
  startdate: any;
  enddate: any;
  photo_url: any;
  active: any;
  search: Search;
  users: any;
  isDetail = false;
  isDelete = false;
  isCancel = false;
  isAdv = false;
  isAdd = false;
  isEdit = false;
  chevron = 'chevrondown';
  fakeArray: any;
  no = 0;
  page = 1;
  limitVal = 5;
  offset = 0;
  jumlahHal = 0;
  minLimitShow = 1;
  maxLimitShow = 10;
  activeClass = 5;

  /*popup*/
  isShowInfo = false;
  siteSearchVsb = false;

  constructor(
    private elementRef: ElementRef,
    @Inject(SysUserService) private sysUserService: SysUserService
  ) {
    this.search = {
      'npeg': '',
      'nama': '',
      'email': '',
      'posisi': '',
      'jabatan_id': ''
    };

    this.contextItems = [
      {
        text: 'Edit',
        disabled: false,
        beginGroup: false,
        items: false
      },
      {
        text: 'Detail',
        disabled: false,
        beginGroup: false,
        items: false
      },
      {
        text: 'Delete',
        disabled: false,
        beginGroup: false,
        items: false
      },
      {
        text: 'Set Active / Inactive',
        disabled: false,
        beginGroup: false,
        items: false
      }
    ];

    this.sysUserService.getAll()
    .subscribe(resp => {
      console.log(resp);
      this.gridDataSource = resp.d.list;
    }, err => {
      console.log(err);
    })

    sysUserService.getAllRole().subscribe(resp => {
      this.roles = resp;
    });

    sysUserService.getAllJabatan().subscribe(resp => {
      console.log(resp);
      this.jabatans = resp;
    });

    // roleService.getAllEntitas().subscribe(resp => {
    //   this.entitas = resp;
    // })


    // this.getRoleData();
  }

  calculateCellValue(data) {
    if (data.status === 'A') {
      return 'ACTIVE'
    } else if (data.status === 'I') {
      return 'INACTIVE'
    } else if (data.status === 'R') {
      return 'REGISTER'
    }
  }

  //pagination
  range(value){
    var nilai = Math.ceil(value/this.limitVal);
    this.jumlahHal = nilai;
    this.fakeArray = new Array(nilai);
  }

  limit(event){
    this.activeClass = event.target.id;
    this.limitVal = event.target.id;
    this.offset = 0;
    this.page = 1;
    this.pagination();
  }

  doneClick(event){
    this.offset = event.target.id;
    this.pagination();
  }

  next(){
    if (this.page==this.jumlahHal) {
      alert('ini halaman terakhir');
    }else{
      this.offset = Number(this.offset)+1;
      this.pagination();
    }
  }

  prev(){
    if (Number(this.page)==1) {
      console.log('hal awal');
    }else{
      this.offset = Number(this.offset)-1;
      this.pagination();
    }
  }

  pagination(){
    this.page = Number(this.offset)+1;
    if (this.page==this.maxLimitShow+1) {
      this.minLimitShow = Number(this.page);
      this.maxLimitShow = Number(this.page)+10;
    }else if(this.page==this.minLimitShow-1){
      this.minLimitShow = Number(this.page)-9;
      this.maxLimitShow = Number(this.page);
    }
    
    this.sysUserService.getLimit(this.offset,this.limitVal)
    .subscribe(resp => {
      console.log(resp);
      this.gridDataSource = resp.d.list;
      this.range(resp.d.total);
    }, err => {
      console.log(err);
    })
  }
  //end pagination

  refresh() {
    this.sysUserService.getAll().subscribe(resp => {
      this.gridDataSource = resp.d.list;
    }, err => {
      console.log(err);
    })
    this.dataGrid.instance.refresh();
  }

  getRoleData() {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    this.sysUserService.getAll().subscribe(resp => {
      this.sysUserService.getAllRoleAuth().subscribe(respAuth => {
        resp.forEach((value, index) => {
          const menus = [];
          const menu = respAuth.filter(element => {
            return element.userRole.id === value.id && element.menuTab.activationCode === 'Y';
          });

          if (Array.isArray(menu)) {
            menu.forEach(menuItem => {
              menus.push(menuItem.menuTab.menuDesciption.toString());
            });
          } else {
            if (typeof menu !== 'undefined') {
              menus.push(menu.menuTab.menuDesciption.toString());
            }
          }

          resp[index].menu = menus;
        })
      });
      this.gridDataSource = resp.filter(data => data.activationCode === 'Y');
    });
  }

  ngAfterViewInit() {
    this.addNewButton()
  }

  addNewButton() {
    const ini = this;
    const d1 = this.elementRef.nativeElement.getElementsByClassName('dx-toolbar-before')[0];
    const $customButton = $('<div id="addNewRole">').dxButton({
      icon: 'add',
      text: 'Tambah User Baru',
      onClick: function () {
        ini.isAdd = true;
        ini.addVisible = ini.isAdd;
      }
    });

    d1.append($customButton[0]);
  }

  showAdvSearch() {
    this.isAdv = !this.isAdv;
    if (this.isAdv) {
      this.chevron = 'chevronup';
    } else {
      this.chevron = 'chevrondown';
    }

  }

  searching() {
    this.sysUserService.getByName(this.search.nama).subscribe(resp => {
      this.sysUserService.getAllRoleAuth().subscribe(respAuth => {
        resp.forEach((value, index) => {
          const menus = [];
          const menu = respAuth.filter(element => {
            return element.userRole.id === value.id;
          });

          if (Array.isArray(menu)) {
            menu.forEach(menuItem => {
              menus.push(menuItem.menuTab.menuDesciption.toString());
            });
          } else {
            if (typeof menu !== 'undefined') {
              menus.push(menu.menuTab.menuDesciption.toString());
            }
          }

          resp[index].menu = menus;
        })
      });
      if (this.search.npeg !== null) {
        this.gridDataSource = resp.filter(role => role.roleName === this.search.npeg).filter(data => data.activationCode === 'Y');
      } else {
        this.gridDataSource = resp.filter(data => data.activationCode === 'Y');
      }
    });
  }

  advSearch() {
    this.sysUserService.getByData(this.search).subscribe(resp => {
      this.sysUserService.getAllRoleAuth().subscribe(respAuth => {
        resp.forEach((value, index) => {
          const menus = [];
          const menu = respAuth.filter(element => {
            return element.userRole.id === value.id;
          });

          if (Array.isArray(menu)) {
            menu.forEach(menuItem => {
              menus.push(menuItem.menuTab.menuDesciption.toString());
            });
          } else {
            if (typeof menu !== 'undefined') {
              menus.push(menu.menuTab.menuDesciption.toString());
            }
          }

          resp[index].menu = menus;
        })
      });
      if (this.search.npeg !== null) {
        this.gridDataSource = resp.filter(role => role.role_id === this.search.npeg).filter(data => data.activationCode === 'Y');
      } else {
        this.gridDataSource = resp.filter(data => data.activationCode === 'Y');
      }
    });
  }

  showMenu(event): void {
    this.target = event;
    this.menuVisible = true;
    this.detail = this.gridDataSource.filter(dataSource => dataSource.id === event)[0];
    this.detailUsers = this.gridDataSource.filter(dataSource => dataSource.id === event)[0];
    
    // this.sysUserService.getSiteByID(this.detailUsers.siteCode)
    // .subscribe( resp => {
    //   this.detailUsers.site = resp[0];
    // })
    this.sysUserService.getRoleByID(this.detailUsers.role_id)
    .subscribe( resp => {
      this.detailUsers.role_id = resp[0];
    })
    // this.sysUserService.getLanguageByID(this.detailUsers.languageDefaultId)
    // .subscribe( resp => {
    //   this.detailUsers.bahasa = resp[0];
    // })
    this.sysUserService.getJabatanByID(this.detailUsers.idpos)
    .subscribe( resp => {
      this.detailUsers.jabatan_id = resp[0];
    })
    this.sysUserService.getEntitasByID(this.detailUsers.idorg)
    .subscribe( resp => {
      this.detailUsers.entitas_id = resp[0];
    })

    if (this.detailUsers.status === 'A') {
      this.detailUsers.statususer = 'ACTIVE'
    } else if (this.detailUsers.status === 'I') {
      this.detailUsers.statususer = 'INACTIVE'
    } else if (this.detailUsers.status === 'R') {
      this.detailUsers.statususer = 'REGISTER'
    }

    if (this.detail.status === 'A') {
      this.contextItems[3].text = 'Set Inactive';
    } else if (this.detail.status === 'I') {
      this.contextItems[3].text = 'Set Active';
    } else if (this.detail.status === 'R') {
      this.contextItems[3].status = 'Set Active';
    }

    console.log(this.detailUsers)
  }

  itemClick(e) {
    if (!e.itemData.items) {
      this.text = e.itemData.text;
      if (this.text === 'Edit') {
        this.isEdit = true;
        this.isAdd = true;
        this.addVisible = true;
      } else if (this.text === 'Detail') {
        this.isDetail = true;
        //this.isAdd = true;
        //this.addVisible = true;
      } else if (this.text === 'Delete') {
        this.isDelete = true;
        this.confVisible = true;
        this.isCancel = false;
      }
      
    }
  }

  click() {
  }

  back() {
    this.isDetail = false;
    //this.addVisible = false;
    //this.isAdd = false;
  }

  onHideMenu() {
    this.menuVisible = false;
  }

  onHidePopup() {
    this.popupVisible = false;
  }

  onHideConf() {
    this.confVisible = false;
    this.isDelete = false;
    this.refresh();
    // this.getRoleData();
  }

  onHideProgress() {
    this.progressVisible = false;
  }

  onHideAdd() {
    this.addVisible = false;
    this.isAdd = false;
    this.isEdit = false;
    this.target = null;
    this.isDetail = false;
    this.target = null;
    const ini = this;
    this.refresh();
    // this.getRoleData();
  }

  delete() {
    this.confVisible = false;
    this.isDelete = false;
    this.isCancel = false;
  }

  onDeleteConf() {
    this.sysUserService.getById(this.target).subscribe(role => {
      this.sysUserService.delete(role.d).subscribe(resp => {
        // this.getRoleData();
        notify({
          closeOnClick: true,
          displayTime: 3000,
          message: 'Item successfully deleted.'
        }, 'success');
        this.refresh();
      }, err => {
        if (err.status === 200) {
          this.getRoleData();
          notify({
            closeOnClick: true,
            displayTime: 3000,
            message: 'Item successfully deleted.'
          }, 'success');
        } else {
          notify({
            closeOnClick: true,
            displayTime: 3000,
            message: 'Deleting failed.'
          }, 'error');
        }
      })
    })
  }
  onCancelConf() {}
}
