import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeTodoComponent} from './home-todo/home-todo.component';
import { UsersComponent } from './users/users.component';

const ROUTES: Routes = [
  
  {path: 'homeTodo', component: HomeTodoComponent},
  {path: 'users', component: UsersComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
