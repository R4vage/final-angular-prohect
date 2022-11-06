import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { loginSuccessful } from './auth/auth-store/auth.actions';
import { AuthorizationSuccess } from './auth/models/authorization.models';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  let store: MockStore;
  let dispatchSpy: jasmine.Spy;
  let login: AuthorizationSuccess;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    login = {
      access_token: 'access',
      token_type: 'Bearer',
      scope: 'scope',
      expire_in: 10,
      refresh_token: 'refresh',
    };

    localStorage.setItem('accessToken', 'access');
    localStorage.setItem('refreshToken', 'refresh');
    localStorage.setItem('login', JSON.stringify(login));

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement;
    router = TestBed.inject(Router);

    store = TestBed.inject(MockStore);

    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    router.initialNavigation();

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TP-final-project'`, () => {
    expect(app.title).toEqual('TP-final-project');
  });

  it("should dispatch 'loginSuccessful' action when localStorage isn't empty", () => {
    expect(dispatchSpy).toHaveBeenCalledOnceWith(loginSuccessful({ ...login }));
  });

  afterEach(() => {
    localStorage.clear();
  });
});
