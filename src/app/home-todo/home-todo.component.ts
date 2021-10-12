import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { StatCaluculService } from '../services/stat-calucul.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home-todo',
  templateUrl: './home-todo.component.html',
  styleUrls: ['./home-todo.component.css']
})
export class HomeTodoComponent implements OnInit {
  listTodo: Todo[];
  statValue: number = 0;
 


  constructor(private calcul: StatCaluculService, private todoservice: TodoService,) { }

  ngOnInit(): void {

    this.todoservice.getTodo().subscribe(

      (data:Todo[])=>{this.listTodo= data});
  }
  changeEtat(t: Todo) {
    let i = this.listTodo.indexOf(t);
    this.listTodo[i].completed = true;
  }
  getStatService() {
    for (let i in this.listTodo) {
      this.statValue = this.calcul.getStat(this.listTodo, 'completed', true);
      console.log(this.statValue);

    }
  }

}
