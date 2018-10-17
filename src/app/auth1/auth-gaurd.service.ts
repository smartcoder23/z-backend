import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.services';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
      console.log("djfsd",this.auth.isAuthenticated())
    if (this.auth.isAuthenticated()) {
    
      console.log("ldsf",this.auth.isAuthenticated())
      return true;
    }
    else{
if(!this.auth.isAuthenticated()){
    
    this.router.navigate(['/login']);
    return false;
    }
  }}

}