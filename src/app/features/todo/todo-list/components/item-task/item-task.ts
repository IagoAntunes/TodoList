import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { TaskModel } from '../../model/task-model';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { InputNewTask } from "../input-new-task/input-new-task";

@Component({
  selector: 'app-item-task',
  imports: [MatCheckbox, CommonModule, InputNewTask],
  templateUrl: './item-task.html',
  styleUrl: './item-task.scss'
})
export class ItemTask {
  @Input() task: TaskModel | null = null;

  @Output() changeStatusEvent = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() editEvent = new EventEmitter<string>();

  protected isEditing: boolean = false;

  protected onChangeTaskStatus(checked: boolean) : void{
    console.log('Task status changed:', checked);
    this.task!.done = checked;
    this.changeStatusEvent.emit(checked);
  }

  protected onDelete() : void{
    this.deleteEvent.emit();
  }

  protected onEdit(newName: string){
    this.task!.name = newName;
    this.editEvent.emit(newName);
    this.isEditing = false;
  }

  protected onChangeToEdit() : void {
    this.isEditing = true;
  }

  protected onCancelEdit() : void{
    this.isEditing = false;
  }

}
