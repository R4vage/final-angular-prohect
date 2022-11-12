import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TopUserArtistActions from '../actions/top-artists.actions';
import { Artist } from 'src/app/core/models/album.models';

export const topUserArtistsFeatureKey = 'topUserArtists';

export interface TopUserArtistState extends EntityState<Artist> {
  topUserArtistsLoaded: boolean
}

export const adapter: EntityAdapter<Artist> =
  createEntityAdapter<Artist>();

export const initialState: TopUserArtistState = adapter.getInitialState({
  topUserArtistsLoaded:false
});

export const reducer = createReducer(
  initialState,
  on(TopUserArtistActions.addTopUserArtist, (state, action) =>
    adapter.addOne(action.topUserArtist, state)
  ),
  on(TopUserArtistActions.upsertTopUserArtist, (state, action) =>
    adapter.upsertOne(action.topUserArtist, state)
  ),
  on(TopUserArtistActions.addTopUserArtists, (state, action) =>
    adapter.addMany(action.topUserArtists, state)
  ),
  on(TopUserArtistActions.upsertTopUserArtists, (state, action) =>
    adapter.upsertMany(action.topUserArtists, state)
  ),
  on(TopUserArtistActions.updateTopUserArtist, (state, action) =>
    adapter.updateOne(action.topUserArtist, state)
  ),
  on(TopUserArtistActions.updateTopUserArtists, (state, action) =>
    adapter.updateMany(action.topUserArtists, state)
  ),
  on(TopUserArtistActions.deleteTopUserArtist, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TopUserArtistActions.deleteTopUserArtists, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(TopUserArtistActions.loadTopUserArtists, (state) => state),
  on(TopUserArtistActions.loadTopUserArtistsSuccess, (state, action) =>
    adapter.setAll(action.topUserArtists,  {...state, topUserArtistsLoaded: true})
  ),
  on(TopUserArtistActions.loadTopUserArtistFailure, (state, action) => {
    throw new Error(action.error)
  }),
  on(TopUserArtistActions.clearTopUserArtists, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
