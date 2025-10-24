import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type taskInterface } from './task-detail.model';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css'
})
export class TaskDetail {
  @Input({ required: true }) task!: taskInterface;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.task.id)
  }
}
