import { createAction, props } from '@ngrx/store';
import { ArtTopTracks } from '../reducers/artist-top-track.reducer';

export const addArtistTopTrack = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTrack',
  props<{ artistId: string }>()
);

export const addArtistTopTrackSuccess = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTrack Success',
  props<{ artistTopTrack: ArtTopTracks }>()
);

export const addArtistTopTracks = createAction(
  '[ArtistTopTrack/API] Add ArtistTopTracks',
  props<{ artistTopTracks: ArtTopTracks[] }>()
);
