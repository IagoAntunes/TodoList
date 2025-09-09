import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly TODOS_KEY = 'todos';

  getTodos() : TaskModel[] {
    var todos = localStorage.getItem(this.TODOS_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  saveTodos(todos: TaskModel[]) : void{
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos));
  }


}
