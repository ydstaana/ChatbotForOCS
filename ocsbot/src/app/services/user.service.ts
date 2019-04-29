import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(){

  }
 
  login(formData) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:5000/login',formData
      )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
