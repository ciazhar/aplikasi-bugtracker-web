import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'czBugTracker';

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
