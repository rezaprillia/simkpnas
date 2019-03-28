export class Search {
    idpos: string;
    position_title: string;
    idpost: string;
    kode_sap: string;
    sebutan_sap: string;
    parent_idpos: string;
  }
  
  export class Role {
    idpos: string;
    position_title: string;
    idpost: string;
    kode_sap: string;
    sebutan_sap: string;
    parent_idpos: string;
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
  