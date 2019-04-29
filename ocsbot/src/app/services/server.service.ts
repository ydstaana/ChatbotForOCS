import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : HttpClient) { }

  startService(){
    return new Promise((resolve, reject) => {
      this.http.get(
        'http://localhost:5000/start'
      )
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
