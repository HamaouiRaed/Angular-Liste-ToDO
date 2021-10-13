import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  listTodo: Todo[];
  constructor(private todoservice: TodoService, private activateroute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activateroute.snapshot.params.userId);
    let userId = this.activateroute.snapshot.params.userId;

    this.todoservice.getTodoUser(userId).subscribe(

      (data: Todo[]) => { this.listTodo = data }
    );

  }
}


