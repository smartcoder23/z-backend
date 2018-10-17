// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
//  import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor() {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('jwtToken');

    // Check whether the token is expired and return
    // true or false
    if(token)
    {
        console.log(token);
        return true;
    }
    else{
        return false;
    }
  }

}