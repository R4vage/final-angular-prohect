import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { PlaylistsEffects } from '../playlists.effects';

describe('PlaylistsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: PlaylistsEffects;
  let snackbar: MatSnackBar;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlaylistsEffects, 
        provideMockActions(() => actions$),
        provideMockStore(),
        {provide: MatSnackBar, useValue: snackbarSpy}
      ],
    });

    effects = TestBed.inject(PlaylistsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
