import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
<<<<<<< HEAD
import { OrgTypeComponent } from './orgtype/orgtype.component';
import { PositionTypeComponent } from './positiontype/positiontype.component';
import { PositionComponent } from './position/position.component';
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { AddOrgTypeComponent } from './orgtype/add/add.component';
import { SiteComponent } from './site/site.component';
import { CompanyComponent } from './company/company.component';
=======
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/edit/company-edit.component';
import { CompanyAddComponent } from './company/add/company-add.component';
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component'

import { SiteComponent } from './site/site.component';
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table'
        }
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          title: 'Form'
        }
      },
      {
<<<<<<< HEAD
        path: 'orgtype',
        component: OrgTypeComponent,
        data: {
          title: 'Organization Type'
        }
      },
      {
        path: 'postype',
        component: PositionTypeComponent,
        data: {
          title: 'Position Type'
        }
      },
      {
        path: 'position',
        component: PositionComponent,
        data: {
          title: 'Position'
        }
      },
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          title: 'Company'
        }
      },
      // {
      //   path: 'company/edit/:id',
      //   component: CompanyEditComponent,
      //   data: {
      //     title: 'Company Edit'
      //   }
      // },
      // {
      //   path: 'company/add',
      //   component: CompanyAddComponent,
      //   data: {
      //     title: 'Company Add'
      //   }
      // },
=======
        path: 'company',
        component: CompanyComponent,
        data: {
          title: 'Company'
        }
      },
      {
        path: 'company/edit/:id',
        component: CompanyEditComponent,
        data: {
          title: 'Company Edit'
        }
      },
      {
        path: 'company/add',
        component: CompanyAddComponent,
        data: {
          title: 'Company Add'
        }
      },
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
      {
        path: 'site',
        component: SiteComponent,
        data: {
          title: 'Site'
        }
      },
      {
        path: 'substation',
        component: SubstationComponent,
        data: {
          title: 'Substation'
        }
      },
      {
        path: 'template',
        component: TemplateComponent,
        data: {
          title: 'Template'
        }
      },
      {
        path: 'template/tab',
        component: TabComponent,
        data: {
          title: 'Tab'
        }
<<<<<<< HEAD
      }
=======
      },
      
      {
        path: 'organisasi',
        component: OrganisasiComponent,
        data: {
          title: 'Menu Organisasi'
        }
      },
      {
        path: 'posisi-organisasi',
        component: PosisiOrganisasiComponent,
        data: {
          title: 'Posisi Organisasi'
        }
      },
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
