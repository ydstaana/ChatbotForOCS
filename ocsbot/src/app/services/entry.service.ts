import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http : HttpClient) { }

  getEntries(){
    return new Promise((resolve, reject) => {
      this.http.get(
        'http://localhost:5000/entries'
      )
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  createEntry(data){
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:5000/entries', data
      )
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
