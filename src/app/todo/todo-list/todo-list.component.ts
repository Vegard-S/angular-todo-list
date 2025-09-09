import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private readonly todoService: TodoService) {}

  todos: Observable<Todo[]> = this.todoService.getTodos();

  ngOnInit() {}

  refreshTodos() {
    this.todos = this.todoService.getTodos();
  }

  completedToggle = true;
  toggleList() {
    this.completedToggle = !this.completedToggle;
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(() => {
      this.refreshTodos();
    });
  }

  async newTodo(title: string) {
    await this.todoService.addTodo(title).subscribe(() => { 
      this.refreshTodos();
    });
  }
}
