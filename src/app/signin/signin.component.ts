import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}
  constructor(private router:Router){}
  ngOnInit() {
    
  }
  onLoginClick(){
    this.router.navigateByUrl('/navbar')
  }
  onForgotClick(){
    this.router.navigateByUrl('/signup')
  }


}
