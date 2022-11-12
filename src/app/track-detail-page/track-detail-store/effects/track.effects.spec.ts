import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TrackEffects } from './track.effects';

describe('TrackEffects', () => {
  let actions$: Observable<unknown>;
  let effects: TrackEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrackEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(TrackEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
