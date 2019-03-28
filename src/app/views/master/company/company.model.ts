<<<<<<< HEAD
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
  
=======
export class Company {
    constructor(
        public id: string,
        public name: string,
        public shortName: string,
        public address: string,
        public city: string,
        public province: string,
        public country: string,
        public postalCode: string,
        public telephone1: string,
        public telephone2: string,
        public facsimile: string,
        public email: string,
        public photo: Blob,
        public latitude: string,
        public longitude: string,
        public timeZone: string,
        public activationBy: string,
        public activationDate: Date,
        public activationCode: string,
        public deactivationBy: string,
        public deactivationDate: Date,
        public description: string,
        public appendix: string
    ) { }
}
>>>>>>> 9f58f0cb1ca73e41521d7ec01116525489274e1b
