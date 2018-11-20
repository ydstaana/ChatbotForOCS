import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(){

  }
 
  login(formData){
  	console.log("called")
  	console.log(formData)
  	this.http.post('http://localhost:5000/login',formData)
  	.subscribe(res => console.log(res),
  			   error => console.log(error))
  }
}
