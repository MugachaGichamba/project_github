import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  public users = [];
  public repos = [];
  constructor(private _userService : UserService) 
  {
    // this._userService.getUsers().subscribe(profile => {
    //   this.userData = profile
    // });
  }

  //gets called once the component has been initialised
  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => { 
        this.users = data
  
      });

      this._userService.getRepos()
      .subscribe(repos => {
        this.repos = repos
        console.log(repos)
      })
    // this._userService.getUsers()
    // .subscribe(profile => {
    //   this.users = prof ile
    // })
  }

}
