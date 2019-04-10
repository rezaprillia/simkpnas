import { Injectable } from '@angular/core';


let direktorat: string[] = [
  "DIR KEUANGAN DAN SUMBER DAYA MANUSIA",
  "duaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "tiga",
  "empattttt",
  "limaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
];

let jenisUpload: string[] = [
  "One",
  "Dua",
  "Tsalasa",
];

let kode: string[] = [
  "satu",
  "dua",
  "tiga"
]
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }
  getDirektorat(): string[] {
    return direktorat;
  }
  getJenisUpload(): string[] {
    return jenisUpload;
  }
  getKode(): string[] {
    return kode;
  }
}
