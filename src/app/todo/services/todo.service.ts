import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient);


  public getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${environment.api}`);
  }

  public addTodo(title: string): Observable<Todo> {
    console.log(title)
    
    return this.http.post<Todo>(`${environment.api}`, { title });
  }

  public updateTodo(updatedTodo: Todo): Observable<Todo> {
    //update db list
    return this.http.put<Todo>(`${environment.api}/${updatedTodo.id}`, updatedTodo);
  }
}
