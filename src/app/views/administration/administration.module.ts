import {
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  AdministrationRoutingModule
} from './administration-routing.module';

import {
  TranslateModule
} from '@ngx-translate/core';

import {
  DxButtonModule,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxTabPanelModule,
  DxTemplateModule,
  DxMapModule,
  DxTreeListModule,
  DxFileUploaderModule,
  DxLoadIndicatorModule,
  DxRadioGroupModule,
  DxValidatorModule,
  DxValidationSummaryModule
} from 'devextreme-angular';

import {
  TabsModule
} from 'ngx-bootstrap/tabs';

import {
  MasterAssetComponent
} from './master_asset/master_asset.component';

import { DetailComponent } from './master_asset/detail_manufacture/detail.component'
import { DetailBrandComponent } from './master_asset/detail_assetbrand/detail.component'
import { DetailTypeComponent } from './master_asset/detail_type/detail.component'

import {
  SharedModule
} from '../shared/shared.module';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from 'app/views/administration/user/add/user-add.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AddRoleComponent } from './role/add/role-add.component';
=======
import {AddRoleComponent} from './role/add/role-add.component';
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
import {AddRoleComponent} from './role/add/role-add.component';
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import { AddAssetBrandComponent } from 'app/views/administration/master_asset/add_assetbrand/brand-add.component';
import { AddManufactureComponent } from 'app/views/administration/master_asset/add_manufacture/manufacture-add.component';
import { AddTypeComponent } from 'app/views/administration/master_asset/add_type/type-add.component';
import { DetailUserComponent } from './user/detail/user-detail.component';
import { SysMenuComponent } from './sys-menu/sys-menu.component';
import { AddSysMenuComponent } from './sys-menu/add/sys-menu-add.component';
import { VisiComponent } from './visi/visi.component';
import { AddVisiComponent } from './visi/add/visi-add.component';
import { MisiComponent } from './misi/misi.component';
import { RolemenuComponent } from './rolemenu/rolemenu.component';
import { AddRolemenuComponent } from './rolemenu/add/rolemenu-add.component';
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import { OrganisasiComponent } from './organisasi/organisasi.component';
// import { AddOrganisasiComponent } from './organisasi/Add/organisasi-add.component';
import { AddOrganisasiComponent } from './organisasi/Add/organisasi-add.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';
import { SysUserComponent } from './sys-user/sys-user.component';
import { SysUserAddComponent } from './sys-user/sys-user-add/sys-user-add.component';
import { DetailSysUserComponent } from './sys-user/sys-user-detail/sys-user-detail.component';
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxRadioGroupModule,
    TabsModule,
    TranslateModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxTreeListModule,
    DxMapModule,
    SharedModule,
    DxFileUploaderModule,
    DxLoadIndicatorModule,
    DxValidatorModule,
    DxValidationSummaryModule
    ],
  declarations: [
    MasterAssetComponent,
    RoleComponent,
    AddRoleComponent,
    AddUserComponent,
    UserComponent,
    DetailComponent,
    DetailBrandComponent,
    DetailTypeComponent,
    AddAssetBrandComponent,
    AddManufactureComponent,
    AddTypeComponent,
    DetailUserComponent,
    SysMenuComponent,
    AddSysMenuComponent,
    VisiComponent,
    AddVisiComponent,
    MisiComponent,
    RolemenuComponent,
    AddRolemenuComponent,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    OrganisasiComponent,
    AddOrganisasiComponent,
    PosisiOrganisasiComponent,
    SysUserComponent,
    SysUserAddComponent,
    DetailSysUserComponent
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
  ],
  exports: [
  ],
  bootstrap: [
    AddRoleComponent,
  ]
})
export class AdministrationModule { }
