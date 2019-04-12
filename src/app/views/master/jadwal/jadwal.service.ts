import { Injectable } from '@angular/core';

let jenisJadwal: string[] = [
  "Periode inisiasinya atasan kpd bawahan",
  "Periode pengisian dan pengesahan perencanaan sasaran kinerja KPI urjab (uraian jabatan)",
  "Periode entry pencapaian realisasi kinerja dan evaluasi pencapaian kinerja individu",
  "Periode penilaian kompetensi pegawai",
  "Periode entry sasaran kinerja pegawai dan appropval atasan",
  "Perpanjangan periode entry sasaran kinerja pegawai dan approval atasan"
];

@Injectable({
  providedIn: 'root'
})
export class JadwalService {
  getJenisJadwal(): string[] {
    return jenisJadwal;
  }
  constructor() { }
}
