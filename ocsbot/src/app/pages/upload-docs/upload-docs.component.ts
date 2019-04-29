import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {
	filesToUpload: File;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  upload(){
  	const formData: any = new FormData();
    const file: File = this.filesToUpload;

    formData.append("files", file, file['name']);

    this.uploadService.upload(formData);
  }

  fileChangeEvent(fileInput: any) {
  	console.log(fileInput.target.files[0]);
    this.filesToUpload = <File>fileInput.target.files[0];
	}

}
