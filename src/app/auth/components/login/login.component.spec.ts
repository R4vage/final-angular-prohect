import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthState, initialAuthState } from '../../auth-store/reducers';
import { AuthorizationSuccess } from '../../models/authorization.models';
import { AuthService } from '../../services/auth.service';

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

  beforeEach(async () => {
    const CODE = 'abcde';
    const STATE = 'state';
    const ERROR = 'value error';
    const URL_TEST = 'https://accounts.spotify.com';

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
        // {
        //   provide: ActivatedRoute,
        //   useValue: {
        //     queryParams: of<Params>({
        //       code: CODE,
        //       state: STATE,
        //     }),
        //   },
        // },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    store = TestBed.inject(MockStore);

    authService = TestBed.inject(AuthService);
    notification = TestBed.inject(NotificationService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    (authService.getAuthorizationUser as jasmine.Spy).and.returnValue(new URL(URL_TEST));
    (authService.getAccessToken as jasmine.Spy).and.returnValue(
      of<AuthorizationSuccess>({
        access_token: '1234',
        token_type: 'Bearer',
        scope: 'user-read-email',
        expire_in: 3600,
        refresh_token: '4321',
      })
    );
    (notification.showError as jasmine.Spy).and.returnValue(null);

    router.initialNavigation();

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
