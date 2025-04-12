import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../auth.actions';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private store: Store, private router : Router) { }

  onLogin() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
    this.router.navigate(['/dashboard']);
  }
}
