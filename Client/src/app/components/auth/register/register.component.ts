import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(){}
  onRegisterSubmit(form:NgForm){
    if(form.valid){
      const username=form.value.username;
      const email=form.value.email;
      const password=form.value.password;
      console.log('Register Username',username);
      console.log('Register Email:',email);
      console.log('Register Password:',password);
    }
    else{
      console.log('register Form is invalid');
    }
  }

}
