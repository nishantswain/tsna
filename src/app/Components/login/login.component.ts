import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm:boolean=false;
  signupForm:boolean=false;
  signupButton:boolean=true;
  loginButton:boolean=true;
  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickLoginButton(){
    this.loginForm=true;
    this.signupForm=false;
    this.loginButton=false;
    this.signupButton=false;
    


  }

  onClickSignupButton(){
   this.signupForm=true;
   this.loginButton=false;
   this.loginForm=false;
   this.signupButton=false;
   
  }

  onClickLogIn(str:any){

    if(str=='login'){
      //authenticate
    //move to homepage
      this.router.navigate(['/home'])
    }
    if(str=='signup'){
      //save data in db
   //authenticate
   //move to homepage
   this.router.navigate(['/home'])
    }

  }

}
