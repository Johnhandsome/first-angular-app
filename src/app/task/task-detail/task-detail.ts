import { Component, Input } from '@angular/core';

export interface taskInterface {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css'
})
export class TaskDetail {
  @Input({ required: true }) task!: taskInterface;
}
