import { Component, OnInit, NgModule } from '@angular/core';
import * as XLSX from 'xlsx';
import notify from 'devextreme/ui/notify';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  DxSelectBoxModule,
  DxLoadIndicatorModule,
  DxTemplateModule,
  DxCheckBoxModule,
  DxFileUploaderModule
} from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import {UploadService} from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [UploadService]
})

@NgModule({
  imports: [
    DxFileUploaderModule,
    BrowserModule,
    DxSelectBoxModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    DxCheckBoxModule
  ]
})

export class UploadComponent implements OnInit {
  date: Date = new Date(2018, 9, 16, 15, 8, 12);
  [x: string]: any;
  direktorat: string[];
  jenisUpload: string[];
  isLoaded: boolean = true;
  kode: string[];
  selectedFile1: File
  selectedFile2: File

  constructor(service: UploadService) {
    this.direktorat = service.getDirektorat();
    this.jenisUpload = service.getJenisUpload();
    this.kode = service.getKode();
   }
  
  okClick() {
    notify("OK button berhasil");
  }
  closeClick() {
    notify("Close button berhasil");
  }
  onFileChanged(event) {
    this.selectedFile1 = event.target.files[0]
  }
  onFileChanged2(event) {
    this.selectedFile2 = event.target.files[1]
  }
  onUpload() {
    // this.http is the injected HttpClient
    this.http.post('my-backend.com/file-upload', this.selectedFile)
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }
  ngOnInit() {
  }

}
@NgModule({
  imports: [
    DxFileUploaderModule,
    BrowserModule,
    DxSelectBoxModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    DxCheckBoxModule
  ],
  declarations: [
    UploadModule
  ],
  bootstrap: [UploadModule]
})
export class UploadModule { }
platformBrowserDynamic().bootstrapModule(UploadModule);
