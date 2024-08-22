import { Component, OnInit} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasks: Task[] =[];

  constructor(private taskService:TaskService){

  }

  ngOnInit():void{
    this.tasks = this.taskService.getTasks();
  }

}
