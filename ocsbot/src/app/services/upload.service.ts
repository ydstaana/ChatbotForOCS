import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(formData){
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:5000/uploads',formData
      )
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
