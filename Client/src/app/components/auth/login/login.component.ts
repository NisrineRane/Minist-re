import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(){}
  onLoginSubmit(form:NgForm){
    if(form.valid){
      const email=form.value.email;
      const password=form.value.password;
      console.log('Login Email:' ,email);
      console.log('Login Password:', password);
      console.log('Form is valid');


    }
    else{
      console.log('Login Form is invalid');
    }
  }



}


