import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) {
  }
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);

  }
  getTodoUser(userId: number) {
    let url = 'https://jsonplaceholder.typicode.com/todos?userId=' + userId;
    
    return this.http.get<Todo[]>(url);
  }
}
