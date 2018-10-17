import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  forgetData = { email:''};
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
 
onsubmit(){
 console.log(this.forgetData);
this.http.post('http://localhost:5000/api/forgotpass',this.forgetData).subscribe(res=>console.log(res))
}
}
