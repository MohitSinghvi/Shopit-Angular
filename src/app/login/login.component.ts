import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(loginForm:NgForm,){
    // console.log("Clicked");
    // console.log(loginForm);
    this.authService.login(loginForm.value)
          .subscribe(
            (response)=>{
                //console.log('login successful')
                //console.log(response)
                //store the token into local storage of browser
                if(response!=null){
                  localStorage.setItem('id', response["id"]);
                }
                // localStorage.setItem('id', )
                //navigate to movies page
                this.router.navigate(['/'])
            },
            (error)=>{
                console.log(error)
            }
          )

  }


}
