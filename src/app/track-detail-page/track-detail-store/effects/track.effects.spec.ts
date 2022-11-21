import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { TrackEffects } from './track.effects';

describe('TrackEffects', () => {
  let actions$: Observable<unknown>;
  let effects: TrackEffects;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']) 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TrackEffects, 
        provideMockActions(() => actions$),
        provideMockStore(),
        {provide: MatSnackBar, useValue: snackbarSpy}
      ],
    });

    effects = TestBed.inject(TrackEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
