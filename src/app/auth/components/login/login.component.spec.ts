import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop, of } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthorizationSuccess } from '../../../core/models/authorization.models';
import { AuthState, initialAuthState } from '../../auth-store/reducers';
import { AuthService } from '../../services/auth.service';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatCardHarness } from '@angular/material/card/testing';

import { loginSuccessful } from '../../auth-store/auth.actions';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: DebugElement;

  let authService: AuthService;
  let notification: NotificationService;
  let router: Router;
  let store: MockStore;
  let location: Location;

  let loader: HarnessLoader;

  let CODE: string;
  let STATE: string;
  let ERROR: string;
  let URL_TEST: string;
  let authSuccess: AuthorizationSuccess;

  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    CODE = 'abcde';
    STATE = 'state';
    ERROR = 'value error';
    URL_TEST = 'https://accounts.spotify.com';
    authSuccess = {
      access_token: '1234',
      token_type: 'Bearer',
      scope: 'user-read-email',
      expire_in: 3600,
      refresh_token: '4321',
    };

    const notificationSpy = jasmine.createSpyObj('NotificationService', ['showError']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getAuthorizationUser', 'getAccessToken']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'auth',
            component: LoginComponent,
          },
          {
            path: 'home',
            component: LoginComponent,
          },
        ]),
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: NotificationService, useValue: notificationSpy },
        provideMockStore<AuthState>({
          initialState: initialAuthState,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    loader = TestbedHarnessEnvironment.loader(fixture);

    store = TestBed.inject(MockStore);

    authService = TestBed.inject(AuthService);
    notification = TestBed.inject(NotificationService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    (authService.getAuthorizationUser as jasmine.Spy).and.returnValue(of<URL>(new URL(URL_TEST)));
    (authService.getAccessToken as jasmine.Spy).and.returnValue(of<AuthorizationSuccess>(authSuccess));
    (notification.showError as jasmine.Spy).and.returnValue(null);

    spyOn(component, 'redirect').and.callFake(noop);
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    fixture.ngZone?.run(() => {
      router.initialNavigation();
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a card with login and button', async () => {
    const card = await loader.getHarness(MatCardHarness);
    const title = await card.getTitleText();
    const button = await loader.getHarness(
      MatButtonHarness.with({
        text: 'Log in Spotify',
      })
    );

    expect(card).toBeTruthy();

    expect(title).toBeTruthy();
    expect(title).toBe('Log in');

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('Log in Spotify');
  });

  it("should redirect after entering the '/login' route", async () => {
    fixture.ngZone?.run(() => {
      router.navigate(['/login']);
    });
    await fixture.whenStable();

    expect(component.redirect).toHaveBeenCalled();
  });

  it("should trigger a '[Login] User login successful' action after user authorizated app and be redirected to '/home'", fakeAsync(() => {
    fixture.ngZone?.run(() => {
      router.navigate(['/auth'], { queryParams: { code: CODE, state: STATE } });
    });
    flushMicrotasks();

    expect(dispatchSpy).toHaveBeenCalledOnceWith(loginSuccessful({ ...authSuccess }));

    expect(location.path()).toBe('/home');
  }));

  it('should give an error after user refused to authorize app', async () => {
    fixture.ngZone?.run(() => {
      router.navigate(['/auth'], { queryParams: { error: ERROR, state: STATE } });
    });
    await fixture.whenStable();

    expect(notification.showError).toHaveBeenCalledTimes(1);
  });

  it('should redirect when the buttons is pressed', async () => {
    const button = await loader.getHarness(
      MatButtonHarness.with({
        text: 'Log in Spotify',
      })
    );
    await button.click();
    await fixture.whenStable();

    expect(location.path()).toBe('/login');
  });
});
