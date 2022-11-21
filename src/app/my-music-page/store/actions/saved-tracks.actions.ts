import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Track } from 'src/app/core/models/track.models';




export const loadSavedTracks = createAction(
  '[Track/API] Load Saved Tracks',
);
export const loadSavedTracksSuccess = createAction(
  '[Track/API] Add Saved Tracks Success',
  props<{ tracks: Track[], totalItems:number }>()
);
export const loadSavedTracksFailure = createAction(
  '[Track/API] Load Saved Tracks Failure', 
  props<{ error: string }>()
);

export const addSavedTracks = createAction(
  '[Track/API] Add Saved Tracks',
);
export const addSavedTracksSuccess = createAction(
  '[Track/API] Add Saved Tracks Success',
  props<{ tracks: Track[] }>()
);

export const addSavedTrack = createAction(
  '[Track/API] Add Saved Track',
  props<{ track: Track }>()
);


export const upsertSavedTrack = createAction(
  '[Track/API] Upsert Saved Track',
  props<{ track: Track }>()
);


export const upsertSavedTracks = createAction(
  '[Track/API] Upsert Saved Tracks',
  props<{ tracks: Track[] }>()
);

export const updateSavedTrack = createAction(
  '[Track/API] Update Saved Track',
  props<{ track: Update<Track> }>()
);

export const updateSavedTracks = createAction(
  '[Track/API] Update Saved Tracks',
  props<{ tracks: Update<Track>[] }>()
);

export const deleteSavedTrack = createAction(
  '[Track/API] Delete Saved Track',
  props<{ id: string }>()
);



