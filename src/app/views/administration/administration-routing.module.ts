import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterAssetComponent } from './master_asset/master_asset.component';
import { UserComponent } from 'app/views/administration/user/user.component';
import { RoleComponent } from './role/role.component';
import { SysMenuComponent } from './sys-menu/sys-menu.component';
import { VisiComponent } from './visi/visi.component';
import { MisiComponent } from './misi/misi.component';
import { RolemenuComponent } from './rolemenu/rolemenu.component';
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { SysUserComponent } from './sys-user/sys-user.component';
import { PosisiOrganisasiComponent } from './posisi-organisasi/posisi-organisasi.component';

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
      }, 
      {
        path: 'users',
        component: SysUserComponent,
        data: {
          title: 'Users'
        }
      }, 
      // {
      //   path: 'users',
      //   component: UserComponent,
      //   data: {
      //     title: 'Users'
      //   }
      // }, 
      {
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
        path: 'users',
        component: SysUserComponent,
        data: {
          title: 'User'
        }
      },
      {
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
