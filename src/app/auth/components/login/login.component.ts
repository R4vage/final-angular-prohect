import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, switchMap, takeUntil, tap, throwError } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthorizationSuccess, isAuthorizationSuccess } from '../../../core/models/authorization.models';
import { loginSuccessful } from '../../auth-store/auth.actions';
import { AuthState } from '../../auth-store/reducers';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  subjectUnsubscriber = new Subject<boolean>();

  code: string | null = null;
  state: string | null = null;
  error: string | null = null;

  constructor(
    private store: Store<AuthState>,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        takeUntil(this.subjectUnsubscriber),
        tap((params) => {
          this.code = params['code'];
          this.state = params['state'];
          this.error = params['error'];
        }),
        switchMap(() => {
          if (this.error) {
            const errorMessage = this.error;
            return throwError(() => new Error(errorMessage.replace(/_/, ' ')));
          }
          return !this.code || !this.state
            ? this.login().pipe(takeUntil(this.subjectUnsubscriber))
            : this.getAccessCode(this.code, this.state).pipe(takeUntil(this.subjectUnsubscriber));
        })
      )
      .subscribe({
        next: (params) => {
          if (isAuthorizationSuccess(params)) {
            this.store.dispatch(loginSuccessful({ ...params }));
            this.router.navigateByUrl('/home');
          } else {
            this.redirect(params);
          }
        },
        error: (err) => {
          this.notification.showError(err, 'Authentication Error');
        },
      });
  }

  login() {
    return this.authService.getAuthorizationUser();
  }

  getAccessCode(code: string, state: string): Observable<AuthorizationSuccess> {
    return this.authService.getAccessToken(code, state);
  }

  redirect(url: URL) {
    window.location.href = `${url.href}`;
  }

  ngOnDestroy(): void {
    this.subjectUnsubscriber.next(true);
    this.subjectUnsubscriber.complete();
  }
}
