import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ArtTopTracks } from '../reducers/artist-top-track.reducer';

export const loadArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Load ArtistTopTracks',
  props<{ artistTopTracks: ArtTopTracks[] }>()
);

export const addArtistTopTrack = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTrack',
  props<{ artistId: string }>()
);

export const addArtistTopTrackSuccess = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTrack Success',
  props<{ artistTopTrack: ArtTopTracks }>()
);

export const upsertArtistTopTrack = createAction(
  '[ArtistTopTrack/API] Upsert ArtistTopTrack',
  props<{ artistTopTrack: ArtTopTracks }>()
);

export const addArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTracks',
  props<{ artistTopTracks: ArtTopTracks[] }>()
);

export const upsertArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Upsert ArtistTopTracks',
  props<{ artistTopTracks: ArtTopTracks[] }>()
);

export const updateArtistTopTrack = createAction(
  '[ArtistTopTrack/API] Update ArtistTopTrack',
  props<{ artistTopTrack: Update<ArtTopTracks> }>()
);

export const updateArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Update ArtistTopTracks',
  props<{ artistTopTracks: Update<ArtTopTracks>[] }>()
);

export const deleteArtistTopTrack = createAction(
  '[ArtistTopTrack/API] Delete ArtistTopTrack',
  props<{ id: string }>()
);

export const deleteArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Delete ArtistTopTracks',
  props<{ ids: string[] }>()
);

export const clearArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Clear ArtistTopTracks'
);
