import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  home1 = 'fjdsjfds'
  constructor() { }



  onSubmit(loginForm: NgForm) {
    
  }

  ngOnInit() {
  }

}
