import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;
  p: number = 1;

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.userservice.getUsers()
      .subscribe( responses => {
        this.users = responses.data;
      	console.log(this.users);
      	return this.users;
      });
  }

}
