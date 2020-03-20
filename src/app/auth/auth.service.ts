import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { env } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private router : Router, private http : HttpClient){}

  login(username : string, password : string) {
    let params = new HttpParams(); //new URLSearchParams(); new FormData();
    params.set('username', username);
    params.set('password', password);

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded)');;
    return this.http.post(env.API_URL + '/do-login', params, {headers : headers}).subscribe({
      next : data => {
        this.onLoginSuccess(data);
      },
      error : err=> {
          this.onLogoutSuccess(err);
      }
    });
  }
  private onLoginSuccess(data) {

  }
  private onLogoutSuccess(err) {

  }
}