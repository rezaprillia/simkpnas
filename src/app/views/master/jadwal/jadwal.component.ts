import { Component, OnInit, enableProdMode, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxButtonModule} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import {JadwalService} from './jadwal.service';
import { UploadModule } from '../upload/upload.component';

@Component({
  selector: 'app-jadwal',
  templateUrl: './jadwal.component.html',
  styleUrls: ['./jadwal.component.scss'],
  providers: [JadwalService]
})

@NgModule({
  imports: [
    BrowserModule,
    DxButtonModule
  ]
})

export class JadwalComponent implements OnInit {

  okClick() {
    notify("OK button berhasil");
  }
  closeClick() {
    notify("Close button berhasil");
  }
  saveClick() {
    notify("Save button berhasil");
  }
  addClick() {
    notify("Add button berhasil");
  }
  jenisJadwal: string[];
  note: String = "ini note";
  constructor(service: JadwalService) {
      this.jenisJadwal = service.getJenisJadwal();
   }
  ngOnInit() {
  }
}
@NgModule({
  imports: [
    BrowserModule,
    DxButtonModule
  ],
  declarations: [
    JadwalModule
  ],
  bootstrap: [JadwalModule]
})
export class JadwalModule { }
platformBrowserDynamic().bootstrapModule(JadwalModule);
