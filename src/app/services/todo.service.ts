import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = `${environment.apiBaseUrl}/todos`;
  
  constructor(private http: HttpClient) {
  }
  
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);

  }
  
  getTodosByUserId(userId: number) {
    return this.http.get<Todo[]>(`${this.url}?userId=${userId}`);
  }
}
