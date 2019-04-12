import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  MasterRoutingModule
} from './master-routing.module';

import {
  TranslateModule
} from '@ngx-translate/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import { OrganisasiComponent } from './organisasi/organisasi.component';
// import { AddOrganisasiComponent } from './organisasi/Add/organisasi-add.component';
import { AddOrganisasi } from './organisasi/Add/organisasi-add.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';
import { PosisiAddComponent } from './posisi-organisasi/posisi-add/posisi-add.component'
<<<<<<< HEAD
=======

>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import {
  DxButtonModule,
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
  DxTabPanelModule,
  DxTemplateModule,
  DxMapModule,
  DxTreeListModule,
  DxFileUploaderModule,
  DxLoadIndicatorModule,
  DxScrollViewModule
} from 'devextreme-angular';

<<<<<<< HEAD
import {
  TabsModule
} from 'ngx-bootstrap/tabs';

import {
  TableComponent
} from './table/table.component';
import {
  FormComponent
} from './form/form.component';
import {
  SubstationComponent
} from './substation/substation.component';
import {
  TemplateComponent
} from './template/template.component';
import {
  TabComponent
} from './template/tab/tab.component';
import {
<<<<<<< HEAD
  CompanyComponent
} from './company/company.component';
import {
  DetailCompanyComponent
} from './company/detail/detail.component';
import {
  CompanyEditComponent
} from './company/edit/company-edit.component';
import {
  CompanyAddComponent
} from './company/add/company-add.component';
import {
=======
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
  SiteComponent
} from './site/site.component';
import {AddSiteComponent} from './site/add/add.component'
import {
  DetailComponent
} from './site/detail/detail.component';
import {
  SharedModule
} from '../shared/shared.module';
import { importExpr } from '@angular/compiler/src/output/output_ast';
<<<<<<< HEAD
=======
=======
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { SiteComponent } from './site/site.component';
import { AddSiteComponent} from './site/add/add.component'
import { DetailComponent } from './site/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { importExpr } from '@angular/compiler/src/output/output_ast';
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
import { OrgTypeComponent } from './orgtype/orgtype.component';
import { AddOrgTypeComponent } from './orgtype/add/add.component';
import { PositionComponent } from './position/position.component';
import { PositionAddComponent } from './position/position-add/position-add.component';
import { PositionTypeComponent } from './positiontype/positiontype.component';
import { PositionTypeAddComponent } from './positiontype/add/positiontype-add.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
<<<<<<< HEAD
import { JadwalComponent } from './jadwal/jadwal.component';
import { UploadComponent } from './upload/upload.component';
=======
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
>>>>>>> 84a49c8380e8a55cac4850ca2c2beb70651160cd

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    DxButtonModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxFormModule,
    TabsModule,
    TranslateModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxTreeListModule,
    DxMapModule,
    SharedModule,
    DxFileUploaderModule,
    DxLoadIndicatorModule,
    DxScrollViewModule
  ],
  declarations: [
    TableComponent,
    FormComponent,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    CompanyComponent,
    //DetailCompanyComponent,
    //CompanyEditComponent,
    CompanyAddComponent,
<<<<<<< HEAD
=======
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    SiteComponent,
    AddSiteComponent,
    DetailComponent,
    SubstationComponent,
    TemplateComponent,
    TabComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    OrganisasiComponent,
    AddOrganisasi,
    PosisiOrganisasiComponent,
    PosisiAddComponent
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    OrgTypeComponent,
    AddOrgTypeComponent,
    PositionComponent,
    PositionAddComponent,
    PositionTypeComponent,
    PositionTypeAddComponent,
    CompanyComponent,
    CompanyAddComponent,
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
    OrganisasiComponent,
    AddOrganisasi,
    PosisiOrganisasiComponent,
<<<<<<< HEAD
    PosisiAddComponent,
    JadwalComponent,
    UploadComponent
=======
    PosisiAddComponent
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
>>>>>>> 84a49c8380e8a55cac4850ca2c2beb70651160cd
  ],
  exports: [
    TabComponent
  ]
})
export class MasterModule {}
