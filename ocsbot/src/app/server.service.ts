import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : HttpClient) { }

  startService(){
  	this.http.get('localhost:5000/start')
  	.subscribe(res => console.log(res),
  			   error => console.log(error))
  }
}
