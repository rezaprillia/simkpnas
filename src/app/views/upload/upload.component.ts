import { Component, OnInit, NgModule } from '@angular/core';
import * as XLSX from 'xlsx';
// import { DxFileUploaderModule } from "devextreme-angular";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
@NgModule({
  imports: [
    // DxFileUploaderModule
  ]
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  arrayBuffer:any;
  file:File;
  incomingfile(event) {
    this.file= event.target.files[0]; 
    }
  
   Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
    }
    fileReader.readAsArrayBuffer(this.file);
  }
}