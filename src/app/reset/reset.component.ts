import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
user={confirmPassword:""}
user1:any;

  constructor(private http:HttpClient,private route: ActivatedRoute) {

    }

  ngOnInit() {

  }

onsubmit(){
  const token = this.route.snapshot.params['token'];

  const userData = {
    token :token,
    user1 : this.user
  };
console.log(userData);
  this.http.post('https://zomato-all.herokuapp.com/api/resetpassword',userData).subscribe(res=>
console.log(res));
}

}
