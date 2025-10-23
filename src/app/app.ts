import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User, userInterface } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUser?: userInterface;

  onSelectUser(id: string) {
    this.selectedUser = this.users.find(user => user.id == id)
    return this.selectedUser
  }
}
