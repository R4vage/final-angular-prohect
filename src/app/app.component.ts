import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSuccessful } from './auth/auth-store/auth.actions';
import { RootState } from './root-store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TP-final-project';

  constructor(private store: Store<RootState>) {}
  ngOnInit(): void {
    const [accessToken, refreshToken, login] = [localStorage.getItem('accessToken'), localStorage.getItem('refreshToken'), JSON.parse(localStorage.getItem('login') as string)];
    if (accessToken && refreshToken && login) {
      this.store.dispatch(loginSuccessful({ ...login }));
    }
  }
}
