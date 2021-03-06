import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import{http} from '@angular/common/http'
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uri = 'http://localhost:3000/api';
  loginData = { username:'', password:'' };
  message = '';
  data: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('jwtToken');
  }

  login() {
    //  localStorage.removeItem('jwtToken');
    this.http.post('https://zomato-all.herokuapp.com/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
