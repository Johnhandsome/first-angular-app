import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core'

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
  @Input() id: string = '';
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.id)
  }
}
