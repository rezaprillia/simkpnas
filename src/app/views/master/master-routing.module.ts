import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/edit/company-edit.component';
import { CompanyAddComponent } from './company/add/company-add.component';
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component'

import { SiteComponent } from './site/site.component';
=======
import { OrgTypeComponent } from './orgtype/orgtype.component';
import { PositionTypeComponent } from './positiontype/positiontype.component';
import { PositionComponent } from './position/position.component';
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { AddOrgTypeComponent } from './orgtype/add/add.component';
import { SiteComponent } from './site/site.component';
import { CompanyComponent } from './company/company.component';
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e

=======
import { OrgTypeComponent } from './orgtype/orgtype.component';
import { PositionTypeComponent } from './positiontype/positiontype.component';
import { PositionComponent } from './position/position.component';
import { SubstationComponent } from './substation/substation.component';
import { TemplateComponent } from './template/template.component';
import { TabComponent } from './template/tab/tab.component';
import { AddOrgTypeComponent } from './orgtype/add/add.component';
import { SiteComponent } from './site/site.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component'

>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
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
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
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
<<<<<<< HEAD
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
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
<<<<<<< HEAD
      },
=======
      }
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
      }
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
