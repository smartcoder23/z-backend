import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,

 
} from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { Router } from '@angular/router';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'BagENe4LxG_PZ_qz2oFX7Aok'
//   })
// };

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})



export class ResetpasswordComponent implements OnInit {
  
  user: SocialUser;
  uri = 'http://localhost:3000/api';
  
 userdata:any;

  constructor(private authService: AuthService,private http:HttpClient, private router: Router) { }
  
  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // console.log("hello",user);
      this.userdata = user;
    });

}


  signInWithGoogle(): void {
    //  console.log("rahul",this.userdata);
    this.http.post('/api/sociallogin',this.userdata).subscribe(resp => {
      this.router.navigate(['books'])
console.log(resp);

  })
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    console.log(this.userdata)
    this.http.post('https://zomato-all.herokuapp.com/api/sociallogin',this.userdata).subscribe(resp => {
      this.router.navigate(['books'])
console.log(resp);

  })
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithLinkedIn(): void {
    console.log(this.userdata)
    this.http.post('https://zomato-all.herokuapp.com/api/sociallogin',this.userdata).subscribe(resp => {
      this.router.navigate(['books'])
console.log(resp);

  })
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  

  signOut(): void {
    this.authService.signOut();
  }

}

