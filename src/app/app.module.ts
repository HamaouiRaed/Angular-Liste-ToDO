import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTodoComponent,
    TodoComponent,
    UsersComponent,
    DetailTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
