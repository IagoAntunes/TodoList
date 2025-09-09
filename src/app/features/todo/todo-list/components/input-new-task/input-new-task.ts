import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-new-task',
  imports: [],
  templateUrl: './input-new-task.html',
  styleUrl: './input-new-task.scss'
})
export class InputNewTask {
  @Output() onCancelAddingTask = new EventEmitter();
  @Output() onAddTask = new EventEmitter<string>();
}
