import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { Observable } from 'rxjs';
import { selectCounter } from './counter.selectors';
import { AsyncPipe, NgIf } from '@angular/common';
import { selectShowCounter } from '../toggle/toggle.selectors';
import { toggleVisibility } from '../toggle/toggle.actions';


@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    imports: [AsyncPipe, NgIf],
})
export class CounterComponent {
    count$: Observable<number>;
    showCounter$: Observable<boolean>;

    constructor(private store: Store) {
        this.count$ = this.store.select(selectCounter);
        this.showCounter$ = this.store.select(selectShowCounter);
    }

    onIncrement() {
        this.store.dispatch(increment());
    }

    onDecrement() {
        this.store.dispatch(decrement());
    }

    onReset() {
        this.store.dispatch(reset());
    }

    onToggle() {
        this.store.dispatch(toggleVisibility());
    }
}