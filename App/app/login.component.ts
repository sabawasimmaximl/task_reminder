import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  submitFunc(uname,upass){
      //uname.value,upass.value;
      console.log("Login Submit Button Clicked");
  }
}
