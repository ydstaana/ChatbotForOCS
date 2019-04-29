import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  login(form){
  	this.userService.login(form.value).then(() => {
      console.log("Successfully logged in")
      this.router.navigateByUrl('/dashboard/server')
    });
  }

}
