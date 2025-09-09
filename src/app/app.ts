import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./features/todo/todo-list/todo-list";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TodoList, RouterOutlet,    MatSlideToggleModule,]
})
export class App {
  protected readonly title = signal('todo-list');
}
