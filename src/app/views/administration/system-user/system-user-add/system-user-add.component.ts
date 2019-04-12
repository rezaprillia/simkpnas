// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-system-user-add',
//   templateUrl: './system-user-add.component.html',
//   styleUrls: ['./system-user-add.component.scss']
// })
// export class SystemUserAddComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {
  Component,
  Input,
  Output,
  EventEmitter, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ContentChildren, AfterContentChecked, AfterContentInit
 } from '@angular/core';
import {SystemUserService} from '../system-user.service';
// import { AddRoleService } from './role-add.service';

import {Menu, SystemUser} from '../system-user.model';
import notify from 'devextreme/ui/notify';
import {DxTreeListComponent, DxValidatorModule, DxValidationSummaryModule, DxFormComponent} from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';

 @Component({
   selector: 'app-system-user-add',
   templateUrl: './system-user-add.component.html',
   providers: []
 })
 export class SystemUserAddComponent implements OnInit, AfterViewInit, AfterContentInit {
   @Input() isEdit;
   @Input() isDetail;
   @Input() editItem;
   @Input() addVisible;
   @Output() onHideAdd = new EventEmitter();
   @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
   @ViewChild(DxFormComponent) formAktif: DxFormComponent;
   @ViewChildren(DxiItemComponent) kontrols: QueryList<DxiItemComponent>;
   @ContentChildren(DxiItemComponent) kontens: QueryList<DxiItemComponent>;

   systemUser: SystemUser;
   file: File;
   isallowregistration: boolean;
   //simpleProducts: string[];
   //daftarKategori: KategoriAktif[];
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

   constructor(private systemUserService: SystemUserService) {
     //this.simpleProducts = roleService.getSimpleProducts();
     //this.daftarKategori = roleService.getDaftarKategori();
     this.systemUser = {
      npeg: '',
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
      file: null,
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
      this.systemUserService.getById(this.editItem).subscribe(respRole => {
        console.log(respRole);
        const nilai: string = respRole.d.isdisplayed;
        this.systemUser = {
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
          file: respRole.d.file,
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
      this.systemUser = {
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
        file: null,
        registration_by: null,
        registration_date: null,
        activation_by: null,
        activation_date: null,
        deactivation_by: null,
        deactivation_date: null,
        modified_by: null,
        modified_date: null,
        activation_code: null
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

  dateBox_valueChanged (e) {
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
     this.systemUser.npeg = this.systemUser.npeg.toUpperCase();
     this.systemUser.nama= this.systemUser.nama.toUpperCase();
     //console.log('isdisplayed sebelum disave = ' + this.role.entitas_level);
     //const nilai: number = this.role.entitas_level;
    //  this.role.isdisplayed = nilai.toString();
     let success = false;
     if (!this.isEdit) {
       //this.role.idorgt = null;
       this.systemUserService.save(this.systemUser).subscribe(resp => {
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
             this.systemUserService.saveRoleAuth({
               read: read,
               write: write,
               menuTab: {id: menuItem.menuId},
               userRole: {id: resp.id}
             }).subscribe(() => {}, () => {
               success = false;
             })
           }
         });

         if (success) {
           // this.options.message = 'Role saved';
           // notify(this.options, 'success', 3000);
           notify({message: 'User berhasil disimpan', position: {my: 'center top', at: 'center top'}},
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
       this.systemUserService.update(this.systemUser).subscribe(resp => {
        console.log(this.systemUser);
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
              this.systemUserService.saveRoleAuth({
                read: read,
                write: write,
                menuTab: { id: menuItem.menuId },
                userRole: { id: resp.id }
              }).subscribe(() => { }, () => {
                success = false;
              })
            } else {
              this.systemUserService.updateRoleAuth({
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
               this.systemUserService.deleteRoleAuth(menuItem.authId).subscribe(() => { }, () => {
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
