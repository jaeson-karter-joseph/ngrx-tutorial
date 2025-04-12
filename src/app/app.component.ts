import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Store } from '@ngrx/store';
import { checkLoginStatus } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-tutorial';
  constructor(private store: Store) {
    this.store.dispatch(checkLoginStatus());
  }
}
