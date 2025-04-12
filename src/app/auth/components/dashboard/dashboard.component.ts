import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsername, selectIsLoggedIn } from '../../auth.selectors';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { logout } from '../../auth.actions';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username$: Observable<string>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
    this.username$ = this.store.select(selectUsername);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
