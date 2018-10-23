import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {  CanActivate } from '@angular/router';
import { AuthGuardService  } from './auth1/auth-gaurd.service';
import { AuthService } from './auth1/auth.services';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import{ResetComponent} from './reset/reset.component'
//  import { JwtHelperService } from '@auth0/angular-jwt';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
 

} from "angular-6-social-login";
import { ForgotpassComponent } from './forgotpass/forgotpass.component';


const appRoutes: Routes = [
  {
    path: 'books',
   
    component: BookComponent,
    canActivate:[AuthGuardService],
    
    data: { title: 'Book List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate:[AuthGuardService],
    data: { title: 'Login' }
  },
  {
    path: 'reset/:token',
    component: ResetComponent,
    // canActivate:[AuthGuardService],
    data: { title: 'Resetpassword' }
  },
  {
    path:'forgot',
    component:ForgotpassComponent
  },
  
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'social',
    component:ResetpasswordComponent
  }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1134094943420079")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("122278366309-c5c19noonklqif71abma2fvpkioqh7r8.apps.googleusercontent.com")
        },
        {
          id: LinkedinLoginProvider.PROVIDER_ID,
          provider: new  LinkedinLoginProvider("811y8puxuj9s3y")
        },      
          
      ],
  );
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    ForgotpassComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule,
  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuardService,AuthService,
    {
      provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
