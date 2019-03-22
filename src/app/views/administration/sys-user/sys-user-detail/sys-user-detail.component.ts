// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sys-user-detail',
//   templateUrl: './sys-user-detail.component.html',
//   styleUrls: ['./sys-user-detail.component.scss']
// })
// export class SysUserDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnInit
} from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridModule } from 'devextreme-angular';
import { SysUserService } from '../sys-user.service';

@Component({
  providers: [],
  selector: 'app-detail-sys-user',
  templateUrl: './sys-user-detail.component.html'
})


export class DetailSysUserComponent implements AfterViewInit, OnInit {

  @Input() detailUsers;
  @Input() popupVisible;
  @Output() onHideUser = new EventEmitter();

  detailUserss;
  detailUsersHeader;
  datasource: any[];
  datasources: any[];
  datasourceHeader: any[];
  isLoaded = false;

  constructor(private service: SysUserService) {

  }

  ngAfterViewInit() {
  }
  
  ngOnInit() {

      this.datasource = this.detailUsers;

      this.service.getAll()
          .subscribe(resp => {
              this.detailUsersHeader = resp;
              this.datasourceHeader = this.detailUsersHeader;

              this.service.getAll()
                  .subscribe(respUser => {
                      this.detailUserss = respUser;
                      this.datasources = this.detailUserss;
                      this.isLoaded = true;
                  }, err => {
                      console.log(err);
                  })
          }, err => {
              console.log(err);
          })
  }


  hide() {
      this.onHideUser.emit();
  }
}
