  export class Search {
    idorgt: string;
    type_name: string;
  }
  
  export class OrgType {
    idorgt: string;
    type_name: string;
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
  