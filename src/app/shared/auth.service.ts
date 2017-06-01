import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLogin() : boolean{
    return localStorage.getItem("authentification")!=null;
  }

  getUserInfo() : any{
    return localStorage.getItem("authentification");
  }

  login(username : string, password : string) : boolean{
    if(username == "admin" && password == "123"){
      let userObject = {
        username: "admin",
        permissions: [
          "TRANSAKSI_VIEW",
          "TRANSAKSI_EDIT"
        ]
      }
      localStorage.setItem("authentification",JSON.stringify(userObject));
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("authentification");
  }
}
