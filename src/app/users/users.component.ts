import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUser: User[];
  constructor(private service: UserService) { }
  ngOnInit(): void {
    this.service.getUsers().subscribe((data: User[]) => { this.listUser = data });
    
    }
  }


