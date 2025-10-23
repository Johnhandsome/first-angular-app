import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core'
export interface userInterface {
  id: string
  name: string
  avatar: string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // avatar = input<string>()
  // name = input<string>()
  // @Input() id: string = '';
  // @Input() avatar: string = '';
  // @Input() name: string = '';
  @Output() select = new EventEmitter();
  // select = output<string>();

  @Input() user!: userInterface

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
