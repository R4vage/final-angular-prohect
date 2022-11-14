import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlaylistsEffects } from '../playlists.effects';

describe('PlaylistsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: PlaylistsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlaylistsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(PlaylistsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
