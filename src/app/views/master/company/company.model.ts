export class Search {
    company_code: string;
    nama_kantor: string;
    website: string;
  }
  
  export class Company {
    company_code: string;
    nama_kantor: string;
    npwp: string;
    website: string;
    email: string;
    no_telp: string;
    fax: string;
    alamat: string;
    propinsi: string;
    kota: string;
    kecamatan: string;
    kelurahan: string;
    kodepos: string;
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
  