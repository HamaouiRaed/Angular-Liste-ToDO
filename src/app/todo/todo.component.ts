import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() event = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }
  notifParent(){
    this.event.emit(this.todo);
  }
}
