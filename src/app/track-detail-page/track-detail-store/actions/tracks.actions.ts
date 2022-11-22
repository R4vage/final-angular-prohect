import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Track } from 'src/app/core/models/track.models';

export const loadTracks = createAction('[Track/API] Load Tracks');
export const loadTrack = createAction(
  '[Resolver] Load Track',
  props<{ id: string }>()
);

export const addTrack = createAction(
  '[Track/API] Add Track',
  props<{ track: Track }>()
);

export const deleteTrack = createAction(
  '[Track/API] Delete Track',
  props<{ id: string }>()
);

export const deleteTracks = createAction(
  '[Track/API] Delete Tracks',
  props<{ ids: string[] }>()
);
