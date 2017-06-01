import { Injectable }     from '@angular/core';
import { CanActivate, CanActivateChild }    from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth : AuthService){}

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return this.auth.isLogin();
  }

  canActivateChild() {
	  console.log('AuthGuard#canActivateChild called');
      return this.canActivate();
  }
}
