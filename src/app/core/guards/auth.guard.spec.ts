import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, flush, flushMicrotasks, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockSelector, MockStore, provideMockStore } from '@ngrx/store/testing';
import { isLoggedIn } from 'src/app/auth/auth-store/auth.selectors';
import { AuthState, initialAuthState } from 'src/app/auth/auth-store/reducers';

import { Router, UrlTree } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  let store: MockStore;
  let mockIsLoggedInSelector: MemoizedSelector<AuthGuard, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: initialAuthState,
        }),
      ],
    });
    guard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);

    spyOn(guard, 'checkLogin').and.callThrough();

    mockIsLoggedInSelector = store.overrideSelector(isLoggedIn, true);

    router.initialNavigation();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is logged in', () => {
    guard.canActivate().subscribe({
      next: (bol) => {
        expect(bol).toBeTrue();
      },
    });

    expect(guard.checkLogin).toHaveBeenCalled();
  });

  it('should redirect to /login if user is not logged in', fakeAsync(() => {
    mockIsLoggedInSelector.setResult(false);
    store.refreshState();

    const urlTreeLogIn = router.parseUrl('/login');

    guard.canActivate().subscribe({
      next: (bol) => {
        expect(bol).toBeInstanceOf(UrlTree);
        expect(bol as UrlTree).toEqual(urlTreeLogIn);
      },
    });
    flush();

    expect(guard.checkLogin).toHaveBeenCalled();
  }));
});
