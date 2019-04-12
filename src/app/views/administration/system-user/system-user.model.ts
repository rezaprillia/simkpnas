export class Search {
    npeg: string;
    nama: string;
    email: string;
    posisi: string;
    jabatan_id: string;
  }
  
  export class SystemUser {
    npeg: string;
    nama: string;
    password: string;
    gelar: string;
    pendidikan: string;
    tgl_masuk: Date;
    tgl_capeg: Date;
    tgl_pegawai_tetap: Date;
    jenis_pegawai: string;
    tgl_pensiun: Date;
    tgl_lahir: Date;
    jenis_kelamin: string;
    gol_darah: string;
    agama: string;
    status: string;
    alamat: string;
    kota: string;
    kodepos: string;
    grade: string;
    email: string;
    posisi: string;
    jabatan_id: string;
    startdate: Date;
    enddate: Date;
    photo_url: string;
    active: number;
    file: File;
    registration_by: string;
    registration_date: Date;
    activation_by: string;
    activation_date: Date;
    deactivation_by: string;
    deactivation_date: Date;
    modified_by: string;
    modified_date: Date;
    activation_code: string;
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

  export class JenisPegawai {
    id: number;
    jenis_pegawai: string;
  }

  export class DaftarJabatan {
    idpos: string;
    position_title: string;
  }
