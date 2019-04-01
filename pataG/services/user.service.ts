import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUsers(){
    return [{
      "id" : 1, "name" : "gichamba", "age" : 30
    }]
  }
}
