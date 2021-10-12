import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { TodoComponent } from './todo/todo.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeTodoComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
