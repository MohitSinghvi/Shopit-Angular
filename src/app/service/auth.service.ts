import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:8080/login"

  constructor(public httpClient:HttpClient, private router: Router) { }
  public login(userCredentials){
    return this.httpClient.post(this.url,userCredentials);
  }

  isLoggedIn(){
    const token = localStorage.getItem('id')
    if(!token)
      return false;
    return true;
  }

  logout(){
    localStorage.removeItem('id');
    this.router.navigate(['/'])
  }

}
