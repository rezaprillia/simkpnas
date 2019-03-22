import { Timestamp } from "rxjs/Rx";

export class Search {
    idorg: string;
    idpos: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    sk_direksi: string;
    tahun: string;
    created_by: number;
    created_date: any;
    updated_by: number;
    updated_date: any;
  }
  
  export class Role {
    idorg: string;
    idpos: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    sk_direksi: string;
    tahun: string;
    created_by: number;
    created_date: any;
    updated_by: number;
    updated_date: any;
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
  