import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeTodoComponent} from './home-todo/home-todo.component';
import { UsersComponent } from './users/users.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';

const ROUTES: Routes = [
  
  {path: 'homeTodo', component: HomeTodoComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: DetailTodoComponent}
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
