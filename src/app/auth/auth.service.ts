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
    return this.http.post<any>(env.getApiUrl() + '/do-login', params, {headers : headers}).subscribe({
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


  logout() {
    return this.http.post<any>(env.getApiUrl() + '/do-logout', {}).subscribe({
      next : data => {this.onLogoutSuccess(data);},
      error : err=>{
          this.onLogoutSuccess(err);
      }
    })
  }
  
  private onLogoutSuccess(data) {
    this.router.navigateByUrl('/');
  }
}