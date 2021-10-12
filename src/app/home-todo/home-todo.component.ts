import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-home-todo',
  templateUrl: './home-todo.component.html',
  styleUrls: ['./home-todo.component.css']
})
export class HomeTodoComponent implements OnInit {
  listTodo: Todo[];
  constructor() { }

  ngOnInit(): void {
    this.listTodo = [
      {userId: 12, id: 1, title: 'task 1', completed: false },
      {userId: 12, id: 2, title: 'task 2', completed: false },
      {userId: 12, id: 3, title: 'task 3', completed: true },
      {userId: 12, id: 4, title: 'task 4', completed: false }
    ]
  }
  changeEtat(t: Todo){
    let i = this.listTodo.indexOf(t);
    this.listTodo[i].completed = true;
  }

}
