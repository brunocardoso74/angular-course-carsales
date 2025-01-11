import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService, User } from '../../resources/services/user.service';
import { NgFor } from '@angular/common';
//import { User } from '../../resources/models/User';

@Component({
  selector: 'app-user-list',
  imports: [ 
      FormsModule,
      CardModule,
      InputTextModule,
      ButtonModule,
      NgFor
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (httpError) => {
        console.error('Erro ao tentar carregar os usuários', httpError);
      }
    );
  }
  /*ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }*/
}
