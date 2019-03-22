export class Search {
    idpost: string;
    position_type: string;
    description: string;
  }
  
  export class PositionType {
    idpost: string;
    position_type: string;
    description: string;
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
  