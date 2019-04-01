import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../src/app/users';
import { Observable } from 'rxjs/';
import { IRepo } from 'src/app/repos';

 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username : string;
 
  constructor(private http : HttpClient) { 
    console.log("service ready")
    this.username = "MugachaGichamba";
   
  }
  

  updateUserName(username: string) {

    this.username = username;
    
  } 
  getUsers(): Observable<IUser[]>{
    
    return this.http.get<IUser[]>('https://api.github.com/users/' + this.username + "?access_token=" + "bf361e1bd02e948e5b8408283d45856edeea1039");
    
  }
  getRepos(): Observable<IRepo[]> {
    return this.http.get<IRepo[]>('https://api.github.com/users/' + this.username + "/repos?access_token=" + "bf361e1bd02e948e5b8408283d45856edeea1039");
    
  }


}
