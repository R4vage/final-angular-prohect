import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should save token in local storage', () => {
    const data = {
      access_token: 'access',
      refresh_token: 'refresh',
      token_type: 'Bearer',
      scope: 'scope',
      expire_in: 10,
    };

    localStorageService.saveTokens(data);

    expect(localStorage.getItem('login')).toBeTruthy();
    expect(JSON.parse(localStorage.getItem('login') as string)).toEqual({ ...data, refresh_token: 'refresh' });
  });

  afterEach(() => {
    localStorage.clear();
  });
});
