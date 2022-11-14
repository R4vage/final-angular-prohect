import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOut } from 'src/app/auth/auth-store/auth.actions';
import { AuthState } from 'src/app/auth/auth-store/reducers';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(logOut());
  }
}
