import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  details = [
    { Task: 'Attend the classes ', Preference: 1 },
    { Task: 'Go to the library', Preference: 2 },
    { Task: 'Complete the assigned project', Preference: 3 },
    { Task: 'Read a novel', Preference: 4 },
  ];
  constructor() {}
  getDetails() {
    return this.details;
  }
}
