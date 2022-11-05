import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';
import { AuthorizationSuccess, isAuthorizationSuccess } from '../../models/authorization.models';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  subjectUnsubscriber = new Subject<boolean>();

  code: string | null = null;
  state: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private locStorageService: LocalStorageService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        takeUntil(this.subjectUnsubscriber),
        tap((params) => {
          this.code = params['code'];
          this.state = params['state'];
        }),
        switchMap((params) => {
          return !this.code || !this.state
            ? this.login().pipe(takeUntil(this.subjectUnsubscriber))
            : this.getAccessCode(this.code, this.state).pipe(takeUntil(this.subjectUnsubscriber));
        })
      )
      .subscribe({
        next: (params) => {
          if (isAuthorizationSuccess(params) && params.token_type === 'Bearer') {
            this.locStorageService.setAccessCode(params.access_token);
            this.locStorageService.setRefreshCode(params.refresh_token);
          } else if (!isAuthorizationSuccess(params)) {
            window.location.href = params.href;
          }
        },
      });
  }

  login() {
    return this.authService.getAuthorizationUser();
  }

  getAccessCode(code: string, state: string): Observable<AuthorizationSuccess> {
    return this.authService.getAccessToken(code, state);
  }

  public get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  ngOnDestroy(): void {
    this.subjectUnsubscriber.next(true);
  }
}
