import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CategoryEffects } from '../category.effects';

describe('CategoryEffects', () => {
  let actions$: Observable<unknown>;
  let effects: CategoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CategoryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
