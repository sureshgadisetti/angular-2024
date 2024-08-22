import { Injectable } from '@angular/core';
import { Task } from './task-modal';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : Task[]= [
    {
      id: 1,
      title: 'SG',
      description: 'Suresh Gadisetti',
      completed: true
    },
    {
      id: 2,
      title: 'SG',
      description: 'Suresh Gadisetti',
      completed: true
    },
    {
      id: 3,
      title: 'SG',
      description: 'Suresh Gadisetti',
      completed: true
    },
    {
      id: 4,
      title: 'SG',
      description: 'Suresh Gadisetti',
      completed: true
    }
  ];

  getTasks(): Task[]{
    return this.tasks;
  }

  constructor() { }
}
