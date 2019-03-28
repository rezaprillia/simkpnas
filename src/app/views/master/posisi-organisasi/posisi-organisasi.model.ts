export class Search {
    idorg: string;
    idpos: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    sk_direksi: String;
    tahun: String;
    created_by: number;
    created_date: Date;
    updated_by: number;
    updated_date: Date;
  }
  
  export class Role {
    idorg: string;
    idpos: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    sk_direksi: String;
    tahun: String;
    created_by: number;
    created_date: Date;
    updated_by: number;
    updated_date: Date;
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
  