import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterAssetComponent } from './master_asset/master_asset.component';
import { UserComponent } from 'app/views/administration/user/user.component';
import { RoleComponent } from './role/role.component';
import { SysMenuComponent } from './sys-menu/sys-menu.component';
import { VisiComponent } from './visi/visi.component';
import { MisiComponent } from './misi/misi.component';
import { RolemenuComponent } from './rolemenu/rolemenu.component';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { SysUserComponent } from './sys-user/sys-user.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { SysUserComponent } from './sys-user/sys-user.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administration'
    },
    children: [
      {
        path: 'master_asset',
        component: MasterAssetComponent,
        data: {
          title: 'Master Asset'
        }
<<<<<<< HEAD
<<<<<<< HEAD
      }, {
        path: 'users',
        component: UserComponent,
        data: {
          title: 'Users'
        }
      }, {
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
      }, 
      // {
      //   path: 'users',
      //   component: UserComponent,
      //   data: {
      //     title: 'Users'
      //   }
      // }, 
      {
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
        path: 'users',
        component: UserComponent,
        data: {
          title: 'Users'
        }
      }, {
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'Role'
        }
      },
      {
        path: 'sys-menu',
        component: SysMenuComponent,
        data: {
          title: 'System Menu'
        }
      },
      {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
        path: 'users',
        component: SysUserComponent,
        data: {
          title: 'User'
        }
      },
      {
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
        path: 'visi',
        component: VisiComponent,
        data: {
          title: 'Visi'
        }
      },
      {
        path: 'misi',
        component: MisiComponent,
        data: {
          title: 'Misi'
        }
      },
      {
        path: 'rolemenu',
        component: RolemenuComponent,
        data: {
          title: 'Role Menu Auth'
        }
      },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
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
<<<<<<< HEAD
>>>>>>> 5d49cea3c17ee0cb875e96c26dc2e59681eb7f2e
=======
>>>>>>> 6077fed911845cd690929106cd7754b614c9fd92
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
