import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
// import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  createUser(user): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }
}
