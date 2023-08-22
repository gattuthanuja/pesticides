import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  RegForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  ReginUser()
  {
    console.warn(this.RegForm.value)
  }
get user()
{
  return this.RegForm.get('user');
}
get password()
{
  return this.RegForm.get('password');
}
  constructor(private Router:Router){}
  ngonInit() {
    
  }
  onResetClick(){
    this.Router.navigateByUrl('/signup')
  }
  onSubmitClick(){
    this.Router.navigateByUrl('/signin')
  }

}
