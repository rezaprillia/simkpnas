// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sys-user-add',
//   templateUrl: './sys-user-add.component.html',
//   styleUrls: ['./sys-user-add.component.scss']
// })
// export class SysUserAddComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import {
  Component,
  Input,
  Output,
  EventEmitter, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ContentChildren, AfterContentChecked, AfterContentInit
<<<<<<< HEAD
} from '@angular/core';
import { SysUserService } from '../sys-user.service';
import { Menu, SysUser, KategoriAktif, JenisPegawai, DaftarJabatan } from '../sys-user.model';
=======
 } from '@angular/core';
import {SysUserService} from '../sys-user.service';
// import { AddRoleService } from './role-add.service';

import {Menu, SysUser, KategoriAktif} from '../sys-user.model';
>>>>>>> 52e6a4eae9d88ac8ac37fe96c5ca8856f5cac55a
import notify from 'devextreme/ui/notify';
import { DxTreeListComponent, DxValidatorModule, DxValidationSummaryModule, DxFormComponent } from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';

<<<<<<< HEAD
@Component({
  selector: 'app-add-sys-user',
  templateUrl: './sys-user-add.component.html',
  providers: []
})
export class SysUserAddComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() isEdit;
  @Input() isDetail;
  @Input() editItem;
  @Input() addVisible;
  @Output() onHideAdd = new EventEmitter();
  @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
  @ViewChild(DxFormComponent) formAktif: DxFormComponent;
  @ViewChildren(DxiItemComponent) kontrols: QueryList<DxiItemComponent>;
  @ContentChildren(DxiItemComponent) kontens: QueryList<DxiItemComponent>;

  //upload//
  value: any[] = [];

  user: SysUser;
  isallowregistration: boolean;
  simpleProducts: string[];
  jabatans: any;
  daftarKategori: KategoriAktif[];
  daftarJabatan: any = {};
  //daftarRole: DaftarRole[];
  // cekAktif: boolean;
  jenisPegawai: JenisPegawai[];
  previousValue: boolean;
  newValue: boolean;

  menuTree: Menu[] = [];

  confVisible = false;
  isSave = false;
  isCancel = false;

  options = {
    message: '',
    closeOnOutsideClick: true,
    closeOnClick: true,
    closeOnSwipe: true,
    closeOnBackButton: true,
  };

  constructor(private sysUserService: SysUserService) {
    this.simpleProducts = sysUserService.getSimpleProducts();
    this.daftarKategori = sysUserService.getDaftarKategori();
    this.jenisPegawai = sysUserService.getJenisPegawai();
    //this.daftarJabatan = sysUserService.getAllJabatan();

    // this.sysUserService.getAllJabatan()
    // .subscribe(resp => {
    //   console.log(resp);
    //   this.daftarJabatan = resp.d.list;
    // }, err => {
    //   console.log(err);
    // })

    this.user = {
      npeg: '',
=======
 @Component({
   selector: 'app-add-sys-user',
   templateUrl: './sys-user-add.component.html',
   providers: []
 })
 export class SysUserAddComponent implements OnInit, AfterViewInit, AfterContentInit {
   @Input() isEdit;
   @Input() isDetail;
   @Input() editItem;
   @Input() addVisible;
   @Output() onHideAdd = new EventEmitter();
   @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
   @ViewChild(DxFormComponent) formAktif: DxFormComponent;
   @ViewChildren(DxiItemComponent) kontrols: QueryList<DxiItemComponent>;
   @ContentChildren(DxiItemComponent) kontens: QueryList<DxiItemComponent>;

   user: SysUser;
   isallowregistration: boolean;
   simpleProducts: string[];
   jabatans: any;
   daftarKategori: KategoriAktif[];
   //daftarRole: DaftarRole[];
   //daftarJabatan: DaftarJabatan[];
   // cekAktif: boolean;
   previousValue: boolean;
   newValue: boolean;

   menuTree: Menu[] = [];

   confVisible = false;
   isSave = false;
   isCancel = false;

   options = {
     message: '',
     closeOnOutsideClick: true,
     closeOnClick: true,
     closeOnSwipe: true,
     closeOnBackButton: true,
   };

   constructor(private sysUserService: SysUserService) {
     this.simpleProducts = sysUserService.getSimpleProducts();
     this.daftarKategori = sysUserService.getDaftarKategori();
     //this.daftarRole = sysUserService.getDaftarRole();
     //this.daftarJabatan = sysUserService.getDaftarJabatan();
     this.user = {
      npeg: null,
>>>>>>> 52e6a4eae9d88ac8ac37fe96c5ca8856f5cac55a
      nama: '',
      password: '',
      gelar: '',
      pendidikan: '',
      tgl_masuk: null,
      tgl_capeg: null,
      tgl_pegawai_tetap: null,
      jenis_pegawai: '',
      tgl_pensiun: null,
      tgl_lahir: null,
      jenis_kelamin: '',
      gol_darah: '',
      agama: '',
      status: '',
      alamat: '',
      kota: '',
      kodepos: '',
      grade: '',
      email: '',
      posisi: '',
      jabatan_id: '',
      startdate: null,
      enddate: null,
      photo_url: '',
      active: null,
      registration_by: '',
      registration_date: null,
      activation_by: '',
      activation_date: null,
      deactivation_by: '',
      deactivation_date: null,
      modified_by: '',
      modified_date: null,
      activation_code: ''
    };
  }

  ngOnInit() {
    if (this.isEdit || this.isDetail) {
      const today = new Date();
      const username = localStorage.getItem('username');
      this.sysUserService.getById(this.editItem).subscribe(respRole => {
        console.log(respRole);
        const nilai: string = respRole.d.isdisplayed;
        this.user = {
          npeg: respRole.d.npeg,
          nama: respRole.d.nama,
          password: respRole.d.password,
          gelar: respRole.d.gelar,
          pendidikan: respRole.d.pendidikan,
          tgl_masuk: respRole.d.tgl_masuk,
          tgl_capeg: respRole.d.tgl_capeg,
          tgl_pegawai_tetap: respRole.d.tgl_pegawai_tetap,
          jenis_pegawai: respRole.d.jenis_pegawai,
          tgl_pensiun: respRole.d.tgl_pensiun,
          tgl_lahir: respRole.d.tgl_lahir,
          jenis_kelamin: respRole.d.jenis_kelamin,
          gol_darah: respRole.d.gol_darah,
          agama: respRole.d.agama,
          status: respRole.d.status,
          alamat: respRole.d.alamat,
          kota: respRole.d.kota,
          kodepos: respRole.d.kodepos,
          grade: respRole.d.grade,
          email: respRole.d.email,
          posisi: respRole.d.posisi,
          jabatan_id: respRole.d.jabatan_id,
          startdate: respRole.d.startdate,
          enddate: respRole.d.enddate,
          photo_url: respRole.d.photo_url,
          active: respRole.d.active,
          registration_by: respRole.d.registration_by,
          registration_date: respRole.d.registration_date,
          activation_by: respRole.d.activation_by,
          activation_date: respRole.d.activation_date,
          deactivation_by: respRole.d.deactivation_by,
          deactivation_date: respRole.d.deactivation_date,
          modified_by: username,
          modified_date: today,
          activation_code: respRole.d.activation_code
        };
        // this.newValue = respRole.d.isallowregistration;

      })
    } else { // New Record
      this.user = {
<<<<<<< HEAD
        npeg: null,
        nama: null,
        password: null,
        gelar: null,
        pendidikan: null,
        tgl_masuk: null,
        tgl_capeg: null,
        tgl_pegawai_tetap: null,
        jenis_pegawai: null,
        tgl_pensiun: null,
        tgl_lahir: null,
        jenis_kelamin: null,
        gol_darah: null,
        agama: null,
        status: null,
        alamat: null,
        kota: null,
        kodepos: null,
        grade: null,
        email: null,
        posisi: null,
        jabatan_id: null,
        startdate: null,
        enddate: null,
        photo_url: null,
        active: null,
        registration_by: null,
        registration_date: null,
        activation_by: null,
        activation_date: null,
        deactivation_by: null,
        deactivation_date: null,
        modified_by: null,
        modified_date: null,
        activation_code: null
=======
          npeg: null,
          nama: null,
          password: null,
          gelar: null,
          pendidikan: null,
          tgl_masuk: null,
          tgl_capeg: null,
          tgl_pegawai_tetap: null,
          jenis_pegawai: null,
          tgl_pensiun: null,
          tgl_lahir: null,
          jenis_kelamin: null,
          gol_darah: null,
          agama: null,
          status: null,
          alamat: null,
          kota: null,
          kodepos: null,
          grade: null,
          email: null,
          posisi: null,
          jabatan_id: null,
          startdate: null,
          enddate: null,
          photo_url: null,
          active: null,
          registration_by: null,
          registration_date: null,
          activation_by: null,
          activation_date: null,
          deactivation_by: null,
          deactivation_date: null,
          modified_by: null,
          modified_date: null,
          activation_code: null
>>>>>>> 52e6a4eae9d88ac8ac37fe96c5ca8856f5cac55a
      };

      // this.treeList.instance.refresh();
    }

  }

  ngAfterViewInit() {
    // console.log(this.kontrols);
    this.kontrols.forEach((item) => {
      // console.log('name = ' + item.name + ' datafield = ' + item.dataField + ', editorType = ' + item.editorType);
    });
  }

  ngAfterContentInit() {
    /*
    this.kontrols.forEach((item) => {
      console.log(item);
    });
    */
    // this.role.isallowregistration = 1;
  }

  dateBox_valueChanged(e) {
    this.previousValue = e.previousValue;
    this.newValue = e.value;
    console.log('checked = ' + e.value);
    // Event handling commands go here
  };

  checkBoxToggled(e) {
    // console.log('isaktif = ' + this.role.isallowregistration);
    console.log('newvalue = ' + this.newValue);
    this.previousValue = e.previousValue;
    this.newValue = e.value;
    console.log('previousValue = ' + e.previousValue + ' newValue = ' + e.value);
    // alert(e.value);
  }

  addToMenu(item) {
    if (!this.menuTree.length) {
      this.menuTree = [];
    }
    this.menuTree.push(item);
  }

  save(e) {
    this.confVisible = true;
    this.isSave = true;
    this.isCancel = false;
    e.preventDefault();
  }

  cancel() {
    this.confVisible = true;
    this.isSave = false;
    this.isCancel = true;
  }
  onHideConf() {
    this.confVisible = false;
  }
  onSaveConf() {
    this.treeList.instance.saveEditData();
    this.user.npeg = this.user.npeg.toUpperCase();
    //this.role.idorgt = this.role.idorgt.toUpperCase();
    //this.role.username = this.role.username.toUpperCase();
    //console.log('isdisplayed sebelum disave = ' + this.role.entitas_level);
    //const nilai: number = this.role.entitas_level;
    //  this.role.isdisplayed = nilai.toString();
    let success = false;
    if (!this.isEdit) {
      //this.role.idorgt = null;
      this.sysUserService.save(this.user).subscribe(resp => {
        console.log(resp);
        success = true;
        this.menuTree.forEach(menuItem => {
          if (menuItem.read || menuItem.write) {
            let read = 'N', write = 'N';
            if (menuItem.read) {
              read = 'Y';
            }
            if (menuItem.write) {
              write = 'Y';
            }
            this.sysUserService.saveRoleAuth({
              read: read,
              write: write,
              menuTab: { id: menuItem.menuId },
              userRole: { id: resp.id }
            }).subscribe(() => { }, () => {
              success = false;
            })
          }
        });

        if (success) {
          // this.options.message = 'Role saved';
          // notify(this.options, 'success', 3000);
          notify({ message: 'User berhasil disimpan', position: { my: 'center top', at: 'center top' } },
            'success', 3000);
          this.hide();
        } else {
          this.options.message = 'Saving Failed';
          notify(this.options, 'error', 3000);
        }
      }, err => {
        this.options.message = 'Saving Failed';
        notify(this.options, 'error', 3000);
      })
    } else {
      this.sysUserService.update(this.user).subscribe(resp => {
        console.log(this.user);
        success = true;

        this.menuTree.forEach(menuItem => {
          if (menuItem.read || menuItem.write) {
            let read = 'N', write = 'N';
            if (menuItem.read) {
              read = 'Y';
            }
            if (menuItem.write) {
              write = 'Y';
            }

            if (typeof menuItem.authId === 'undefined') {
              this.sysUserService.saveRoleAuth({
                read: read,
                write: write,
                menuTab: { id: menuItem.menuId },
                userRole: { id: resp.id }
              }).subscribe(() => { }, () => {
                success = false;
              })
            } else {
              this.sysUserService.updateRoleAuth({
                authId: menuItem.authId,
                read: read,
                write: write,
                menuTab: { id: menuItem.menuId },
                userRole: { id: resp.id }
              }).subscribe(() => { }, () => {
                success = false;
              })
            }
          } else {
            if (typeof menuItem.authId !== 'undefined') {
              this.sysUserService.deleteRoleAuth(menuItem.authId).subscribe(() => { }, () => {
                success = false;
              });
            }
          }
        });

        if (success) {
          this.options.message = 'User updated';
          notify(this.options, 'success', 3000);
          this.hide();
        } else {
          this.options.message = 'Updating Failed';
          notify(this.options, 'error', 3000);
        }
      }, err => {
        this.options.message = 'Updating Failed';
        notify(this.options, 'error', 3000);
      }
      )
    }
  }
  onCancelConf() {
    this.addVisible = false;
    this.hide();
  }
  hide() {
    this.onHideAdd.emit();
  }

  toolbarPreparing(e) {
    e.toolbarOptions.visible = false;
  }

  cellClick(e) {
    this.treeList.instance.saveEditData();
  }

  rowUpdated(e) {
    console.log('updated', e, this.menuTree);
    const menuChecked = this.menuTree.find(menu => menu.menuId === e.key);

    this.menuTree.forEach((menu, index) => {
      if (menu.menuParent === e.key) {
        if (typeof e.data.read !== 'undefined') {
          this.menuTree[index].read = e.data.read;
        }
        if (typeof e.data.write !== 'undefined') {
          this.menuTree[index].write = e.data.write;
        }
      }
    })

    if (typeof menuChecked.menuParent !== 'undefined') {
      const menuChild = this.menuTree.filter(menu => menu.menuParent === menuChecked.menuParent);

      let read = 0, write = 0;
      menuChild.forEach(menu => {
        // console.log(menu)
        if (menu.read) {
          read++;
        }

        if (menu.write) {
          write++;
        }
      })

      if (read > 0) {
        this.menuTree.forEach((menu, index) => {
          if (menu.menuId === menuChecked.menuParent) {
            this.menuTree[index].read = true;
          }
        })
      }

      if (write > 0) {
        this.menuTree.forEach((menu, index) => {
          if (menu.menuId === menuChecked.menuParent) {
            this.menuTree[index].write = true;
          }
        })
      }
    }
  }
}
