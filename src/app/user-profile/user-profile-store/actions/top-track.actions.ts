import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TopUserTrack } from '../top-user-track.model';
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

export const addTopUserTrack = createAction(
  '[TopUserTrack/API] Add TopUserTrack',
  props<{ topUserTrack: Track }>()
);

export const upsertTopUserTrack = createAction(
  '[TopUserTrack/API] Upsert TopUserTrack',
  props<{ topUserTrack: Track }>()
);

export const addTopUserTracks = createAction(
  '[TopUserTrack/API] Add TopUserTracks',
  props<{ topUserTracks: Track[] }>()
);

export const upsertTopUserTracks = createAction(
  '[TopUserTrack/API] Upsert TopUserTracks',
  props<{ topUserTracks: Track[] }>()
);

export const updateTopUserTrack = createAction(
  '[TopUserTrack/API] Update TopUserTrack',
  props<{ topUserTrack: Update<Track> }>()
);

export const updateTopUserTracks = createAction(
  '[TopUserTrack/API] Update TopUserTracks',
  props<{ topUserTracks: Update<Track>[] }>()
);

export const deleteTopUserTrack = createAction(
  '[TopUserTrack/API] Delete TopUserTrack',
  props<{ id: string }>()
);

export const deleteTopUserTracks = createAction(
  '[TopUserTrack/API] Delete TopUserTracks',
  props<{ ids: string[] }>()
);

export const clearTopUserTracks = createAction(
  '[TopUserTrack/API] Clear TopUserTracks'
);
