import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(formData){
  	this.http.post('http://localhost:5000/uploads',formData)
  	.subscribe(res => console.log(res),
  			   error => console.log(error))
  }
}
