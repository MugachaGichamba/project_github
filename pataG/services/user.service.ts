import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../src/app/users';
import { Observable } from 'rxjs/';
import { IRepo } from 'src/app/repos';

 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiKey : string = 'https://api.github.com/users/MugachaGichamba?access_token=' + "bf361e1bd02e948e5b8408283d45856edeea1039";
  private repos: string = 'https://api.github.com/users/MugachaGichamba/repos?access_token=' + "bf361e1bd02e948e5b8408283d45856edeea1039";
  constructor(private http : HttpClient) { 
    console.log("service ready")
  }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiKey);
    
  }
  getRepos(): Observable<IRepo[]> {
    return this.http.get<IRepo[]>(this.repos);
    
  }

}
