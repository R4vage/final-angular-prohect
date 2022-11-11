import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Track } from 'src/app/core/models/track.models';

export const loadTracks = createAction('[Track/API] Load Tracks');
export const loadTrack = createAction('[Resolver] Load Track', props<{ id: string }>());

export const allTracksLoaded = createAction('[Resolver] Tracks Loaded', props<{ tracks: Track[] }>());
export const trackLoaded = createAction('[Resolver] Track Loaded', props<{ track: Track }>());

export const addTrack = createAction('[Track/API] Add Track', props<{ track: Track }>());

export const upsertTrack = createAction('[Track/API] Upsert Track', props<{ track: Track }>());

export const addTracks = createAction('[Track/API] Add Tracks', props<{ tracks: Track[] }>());

export const upsertTracks = createAction('[Track/API] Upsert Tracks', props<{ tracks: Track[] }>());

export const updateTrack = createAction('[Track/API] Update Track', props<{ track: Update<Track> }>());

export const updateTracks = createAction('[Track/API] Update Tracks', props<{ tracks: Update<Track>[] }>());

export const deleteTrack = createAction('[Track/API] Delete Track', props<{ id: string }>());

export const deleteTracks = createAction('[Track/API] Delete Tracks', props<{ ids: string[] }>());

export const clearTracks = createAction('[Track/API] Clear Tracks');

export const trackSearch = createAction('[Track Detail Page] Track Search', props<{ id: string }>());
