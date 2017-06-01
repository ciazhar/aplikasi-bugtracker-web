import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor (private authService : AuthService, private router : Router){}

  ngOnInit() {
  }

  login(){
    let apa = this.authService.login(this.username, this.password);
    this.router.navigate(['/']);
  }

}
