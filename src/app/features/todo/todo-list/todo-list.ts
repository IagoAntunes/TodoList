import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TaskModel } from './model/task-model';
import { MatCardContent } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputNewTask } from "./components/input-new-task/input-new-task";
import { ItemTask } from "./components/item-task/item-task";
import { TodoService } from './services/todo-service';

@Component({
  selector: 'app-todo-list',
  imports: [MatButtonModule, MatIcon, MatFormFieldModule, MatInputModule, InputNewTask, ItemTask],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  private todoService = inject(TodoService);
  protected tasks: TaskModel[] = [];

  ngOnInit(): void {
    var todos = this.todoService.getTodos();
    this.tasks = todos;
  }

  protected get tasksCreated(): number {
    return this.tasks.length;
  }

  protected get tasksDone(): number {
    return this.tasks.filter(task => task.done).length;
  }

  protected isAddingTask: boolean = false;

  protected onChangeToIsAddingTask(): void{
    this.isAddingTask = true;
  }

  protected onCancelAddingTask() : void{
    this.isAddingTask = false;
  }

  protected onAddTask(task:string) : void{
    var createdTask: TaskModel = {
      id: (this.tasks.length + 1).toString(),
      name: task,
      done: false
    }
    this.tasks.push(createdTask);
    this.isAddingTask = false;
    this.todoService.saveTodos(this.tasks);
  }

  protected handleDelete(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.todoService.saveTodos(this.tasks);
  }

  protected handleEdit(taskId:string, newName:string) : void{
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.name = newName;
      this.todoService.saveTodos(this.tasks);
    }
  }

  protected handleStatusChange(taskId:string, done:boolean) : void{
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.done = done;
      this.todoService.saveTodos(this.tasks);
    }
  }

}
