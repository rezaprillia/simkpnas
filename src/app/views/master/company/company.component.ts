<<<<<<< HEAD
import { Component, Inject, ViewChild } from '@angular/core';
import { CompanyService} from './company.service';
import { error } from 'selenium-webdriver';
import { Company } from './company.model';
import DataSource from 'devextreme/data/data_source';
import { SharedModule } from '../../shared/shared.module';
import { ContextItemService, ContextItem } from './_contextItems';
import 'rxjs/add/operator/toPromise';
import notify from 'devextreme/ui/notify';
import {Router } from '@angular/router';
import {DetailCompanyComponent} from './detail/detail.component';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule
} from 'devextreme-angular';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService, ContextItemService]
})
export class CompanyComponent {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  // dataSource: Company[];
  gridDataSource: any = {};

  contextItems: any;
  target: any;
  menuVisible = false;
  detail: any;
  details: any;
=======
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-company',
//   templateUrl: './company.component.html',
//   styleUrls: ['./company.component.scss']
// })
// export class CompanyComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {DxDataGridComponent, DxCheckBoxComponent} from 'devextreme-angular';
import {Search, Company} from './company.model';
import {CompanyService} from './company.service';
import notify from 'devextreme/ui/notify';
import {convertRuleOptions} from 'tslint/lib/configuration';

declare const $: any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [CompanyService]
})
export class CompanyComponent implements AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  contextItems: any;
  target: any;
  addVisible = false;
  menuVisible = false;
  detail: any;
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
  text: any;
  popupVisible = false;
  confVisible = false;
  progressVisible = false;
  progressTitle: any;
  progressContent: any;
<<<<<<< HEAD
  isCancel = false;
  isDetail = false;
  isEdit = false;
  isAdd = false;
  isDelete = false;
  companyDetail: any;
  company: any[];

  constructor(
    @Inject(CompanyService) private service: CompanyService,
    private CIService: ContextItemService,
        private router: Router
  ) {
    // this.search = this.service.getSearch();
    this.contextItems = CIService.getContextItems();

      this.gridDataSource = new DataSource({
      load: function () {
        return service.getAll()
          .toPromise()
          .then(resp => {
            // console.log(resp);
            return resp;
          }, err => {
            console.log(err);
          });
      },
      insert: function (values) {
        console.log('values company : ', values);
        return service.save(values).toPromise();
      },
      update: function (key, values) {
        return service.update(key.id, values).toPromise();
      },
=======

  // roles: any[];
  gridDataSource: any = {};
  search: Search;
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

  constructor(
    private elementRef: ElementRef,
    @Inject(CompanyService) private companyService: CompanyService
  ) {
    this.search = {
      company_code: '',
      nama_kantor: '',
      website: '',
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
      }
    ];

    this.companyService.getAll()
    .subscribe(resp => {
      console.log(resp);
      this.gridDataSource = resp.d.list;
    }, err => {
      console.log(err);
    })


    // this.getRoleData();
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
    
    this.companyService.getLimit(this.offset,this.limitVal)
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
    this.companyService.getAll().subscribe(resp => {
      this.gridDataSource = resp.d.list;
    }, err => {
      console.log(err);
    })
    this.dataGrid.instance.refresh();
  }

  getRoleData() {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    this.companyService.getAll().subscribe(resp => {
      this.companyService.getAllRoleAuth().subscribe(respAuth => {
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
      text: 'Tambah Company Baru',
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
    this.companyService.getByName(this.search.nama_kantor).subscribe(resp => {
      this.companyService.getAllRoleAuth().subscribe(respAuth => {
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
      if (this.search.company_code !== '') {
        this.gridDataSource = resp.filter(role => role.roleName === this.search.company_code).filter(data => data.activationCode === 'Y');
      } else {
        this.gridDataSource = resp.filter(data => data.activationCode === 'Y');
      }
    });
  }

  advSearch() {
    this.companyService.getByData(this.search).subscribe(resp => {
      this.companyService.getAllRoleAuth().subscribe(respAuth => {
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
      if (this.search.company_code !== '') {
        this.gridDataSource = resp.filter(role => role.roleName === this.search.company_code).filter(data => data.activationCode === 'Y');
      } else {
        this.gridDataSource = resp.filter(data => data.activationCode === 'Y');
      }
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
    });
  }

  showMenu(event): void {
<<<<<<< HEAD
    console.log('event : ', event);
    this.target = event;
    this.menuVisible = true;
    this.detail = this.gridDataSource._items.filter(dataSource => dataSource.id === event)[0]
    this.details = this.detail;
    console.log('this.detail : ', this.detail);
    if (this.detail.activationCode === 'Y') {
      this.detail.activationCode = 'YES'
    } else if (this.detail.activationCode === 'N') {
      this.detail.activationCode = 'NO'
    }
  }
  itemClick(e) {
    console.log('e : ', e);
    if (!e.itemData.items) {
      this.text = e.itemData.text;
      console.log('text: ', this.text)
      if (this.text === 'Detail') {
        this.popupVisible = true;
        this.isDetail = true;
        // console.log('popupVisible: ', this.popupVisible)
      } else if (this.text === 'Edit') {
        this.isEdit = true;
        this.router.navigate(['/master/company/edit', this.target]);
      } else if (this.text === 'Add') {
        this.isAdd = true;
        this.router.navigate(['/master/company/add']);
      } else if (this.text === 'Delete') {
        this.isDelete = true;
        this.confVisible = true;
      }
    }
  }
  delete() {
    this.confVisible = false;
    this.isDelete = false;
  }
  cancel() {
    console.log('cancel');
  }
  onCancelConf() {
    console.log('cancel');
  }
  onDeleteConf() {
    let userdel = null;
    this.service.getById(this.target).subscribe(resp => {
      userdel = resp;
      console.log(resp);
      this.service.delete(userdel).subscribe(resp2 => {
        notify({
          closeOnClick: true,
          displayTime: 5000,
          message: 'Item successfully deleted.'
        }, 'success');
        this.service.getAll().subscribe(resp3 => {
          this.gridDataSource = resp3;
        });
      })
    })
  }
  onHideSite() {
    this.popupVisible = false;
  }

  onHidePopup() {
    this.popupVisible = false;
    console.log('this.popup : ', this.popupVisible);
  }

  onHideConf() {
    this.isDelete = false;
    this.confVisible = false;
=======
    this.target = event;
    this.menuVisible = true;
    this.detail = this.gridDataSource.filter(dataSource => dataSource.id === event)[0];
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
        this.isAdd = true;
        this.addVisible = true;
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
    this.addVisible = false;
    this.isAdd = false;
  }

  onHideMenu() {
    this.menuVisible = false;
  }

  onHideConf() {
    this.confVisible = false;
    this.isDelete = false;
    this.refresh();
    // this.getRoleData();
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
  }

  onHideProgress() {
    this.progressVisible = false;
  }

<<<<<<< HEAD
  onHideMenu() {
    this.menuVisible = false;
  }
=======
  onHideAdd() {
    this.addVisible = false;
    this.isAdd = false;
    this.isEdit = false;
    this.isDetail = false;
    this.target = null;
    this.refresh();
    // this.getRoleData();
  }

  delete() {
    this.confVisible = false;
    this.isDelete = false;
    this.isCancel = false;
  }

  onDeleteConf() {
    this.companyService.getById(this.target).subscribe(role => {
      this.companyService.delete(role.d).subscribe(resp => {
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
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
}
