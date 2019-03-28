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

=======
import { OrganisasiComponent } from './organisasi/organisasi.component';
// import { AddOrganisasiComponent } from './organisasi/Add/organisasi-add.component';
import { AddOrganisasi } from './organisasi/Add/organisasi-add.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';
import { PosisiAddComponent } from './posisi-organisasi/posisi-add/posisi-add.component'
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
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
=======
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
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
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
import { OrgTypeComponent } from './orgtype/orgtype.component';
import { AddOrgTypeComponent } from './orgtype/add/add.component';
import { PositionComponent } from './position/position.component';
import { PositionAddComponent } from './position/position-add/position-add.component';
import { PositionTypeComponent } from './positiontype/positiontype.component';
import { PositionTypeAddComponent } from './positiontype/add/positiontype-add.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
=======
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b

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
=======
    CompanyComponent,
    DetailCompanyComponent,
    CompanyEditComponent,
    CompanyAddComponent,
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
    SiteComponent,
    AddSiteComponent,
    DetailComponent,
    SubstationComponent,
    TemplateComponent,
    TabComponent,
<<<<<<< HEAD
    OrgTypeComponent,
    AddOrgTypeComponent,
    PositionComponent,
    PositionAddComponent,
    PositionTypeComponent,
    PositionTypeAddComponent,
    CompanyComponent,
    CompanyAddComponent,
=======
    OrganisasiComponent,
    AddOrganisasi,
    PosisiOrganisasiComponent,
    PosisiAddComponent
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
  ],
  exports: [
    TabComponent
  ]
})
export class MasterModule {}
