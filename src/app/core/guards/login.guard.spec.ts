import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { isLoggedOut } from 'src/app/auth/auth-store/auth.selectors';
import { initialAuthState } from 'src/app/auth/auth-store/reducers';
import { AuthGuard } from './auth.guard';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let guard: LoginGuard;

  let router: Router;

  let store: MockStore;
  let mockIsLoggedOutSelector: MemoizedSelector<AuthGuard, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: initialAuthState,
        }),
      ],
    });
    guard = TestBed.inject(LoginGuard);

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);

    spyOn(guard, 'checkLogout').and.callThrough();

    mockIsLoggedOutSelector = store.overrideSelector(isLoggedOut, true);

    router.initialNavigation();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is logged out', () => {
    guard.canActivate().subscribe({
      next: (bol) => {
        expect(bol).toBeTrue();
      },
    });

    expect(guard.checkLogout).toHaveBeenCalled();
  });

  it('should redirect to /login if user is not logged out', fakeAsync(() => {
    mockIsLoggedOutSelector.setResult(false);
    store.refreshState();

    const urlTreeLogIn = router.parseUrl('/');

    guard.canActivate().subscribe({
      next: (bol) => {
        expect(bol).toBeInstanceOf(UrlTree);
        expect(bol as UrlTree).toEqual(urlTreeLogIn);
      },
    });
    flush();

    expect(guard.checkLogout).toHaveBeenCalled();
  }));
});
