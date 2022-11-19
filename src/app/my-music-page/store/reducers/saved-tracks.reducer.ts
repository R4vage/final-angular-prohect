import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as SavedTrackActions from '../actions/saved-tracks.actions';
import { Track } from 'src/app/core/models/track.models';

export const savedTracksFeatureKey = 'savedTracks';



export interface SavedTrackState extends EntityState<Track> {
  savedTracksLoaded: boolean;
  totalItems:number;
}

export const adapter: EntityAdapter<Track> =
  createEntityAdapter<Track>();

export const initialState: SavedTrackState = adapter.getInitialState({
  savedTracksLoaded:false,
  totalItems: 0
});

export const reducer = createReducer(
  initialState,
  on(SavedTrackActions.addSavedTracks, state => state),
  on(SavedTrackActions.addSavedTracksSuccess, (state, action) =>
    adapter.addMany(action.tracks, state)
  ),

  on(SavedTrackActions.loadSavedTracks, state => state),
  on(SavedTrackActions.loadSavedTracksSuccess, (state, action) =>
  adapter.setAll(action.tracks, { ...state, savedTracksLoaded: true, totalItems:action.totalItems })
  ),
  on(SavedTrackActions.loadSavedTracksFailure, (state ,action)=>{throw new Error(action.error)}),


  on(SavedTrackActions.addSavedTrack, (state, action) =>
    adapter.addOne(action.track, {...state, totalItems: state.totalItems+1})
  ),

  on(SavedTrackActions.upsertSavedTrack, (state, action) =>
    adapter.upsertOne(action.track, state)
  ),
  on(SavedTrackActions.upsertSavedTracks, (state, action) =>
    adapter.upsertMany(action.tracks, state)
  ),
  on(SavedTrackActions.updateSavedTrack, (state, action) =>
    adapter.updateOne(action.track, state)
  ),
  on(SavedTrackActions.updateSavedTracks, (state, action) =>
    adapter.updateMany(action.tracks, state)
  ),
  on(SavedTrackActions.deleteSavedTrack, (state, action) =>
    adapter.removeOne(action.id, {...state, totalItems: state.totalItems-1})
  ),
  on(SavedTrackActions.deleteSavedTracks, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),

  on(SavedTrackActions.clearSavedTracks, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
