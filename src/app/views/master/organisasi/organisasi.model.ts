export class Search {
    idorg: string;
    parent_idorg: string;
    entitas_name: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    tahun: string;
    entitas_level: number;
    description: string;
    idorgt: string;
    kode_sap: string;
    sebutan_sap: string;
    company_code: string;
  }
  
  export class Role {
    idorg: string;
    parent_idorg: string;
    entitas_name: string;
    mulai_berlaku: Date;
    akhir_berlaku: Date;
    tahun: string;
    entitas_level: number;
    description: string;
    idorgt: string;
    kode_sap: string;
    sebutan_sap: string;
    company_code: string;
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
  