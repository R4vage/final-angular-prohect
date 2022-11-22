import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Track } from 'src/app/core/models/track.models';

export const loadTopUserTracks = createAction(
  '[TopUserTrack/API] Load TopUserTracks'
);

export const loadTopUserTracksSuccess = createAction(
  '[TopUserAlbum/API] Load TopUserTracks Success',
  props<{ topUserTracks: Track[] }>()
);

export const loadTopUserTracksFailure = createAction(
  '[TopUserAlbum/API] Load TopUserTracks Failure',
  props<{ error: any }>()
);
