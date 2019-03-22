import { InteractivityChecker } from "@angular/cdk/a11y";

export class Search {
    userid: number;
    username: string;
    nama: string;
    email: string;
  }
  
  export class SysUser {
    userid: number;
    username: string;
    nama: string;
    password: string;
    jabatan_id: number;
    entitas_id: number;
    role_id: number;
    active: number
    language_default_id: string;
    alamat: string;
    propinsi: string;
    kota: string;
    kecamatan: string;
    kelurahan: string;
    kodepos: string;
    nohp: string;
    email: string;
    description: string;
    photo_url: string;
    registration_by: string;
    registration_date: Date;
    activation_by: string;
    activation_date: Date;
    deactivation_by: string;
    deactivation_date: Date;
    activation_code: string;
    modified_by: string;
    modified_date: Date;
  }
  
  export class Menu {
    authId?: string;
    menuParent?: string;
    menuId: string;
    read: any;
    write: any;
    text: string;
    items?: Menu[];
  }
  
  export class KategoriAktif {
    ID: number;
    Nama: string;
  }

  export class DaftarRole {
    role_id: number;
    nama: string;
  }

  export class Jabatan {
    idpos: string;
    position_title: string;
    idpost: string;
    kode_sap: string;
    sebutan_sap: string;
    parent_idpos: string;
  }
  