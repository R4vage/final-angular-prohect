import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TopUserArtistActions from '../actions/top-artists.actions';
import { Artist } from 'src/app/core/models/album.models';

export const topUserArtistsFeatureKey = 'topUserArtists';

export interface TopUserArtistState extends EntityState<Artist> {
  topUserArtistsLoaded: boolean;
}

export const adapter: EntityAdapter<Artist> = createEntityAdapter<Artist>();

export const initialState: TopUserArtistState = adapter.getInitialState({
  topUserArtistsLoaded: false,
});

export const reducer = createReducer(
  initialState,

  on(TopUserArtistActions.loadTopUserArtists, (state) => state),
  on(TopUserArtistActions.loadTopUserArtistsSuccess, (state, action) =>
    adapter.setAll(action.topUserArtists, {
      ...state,
      topUserArtistsLoaded: true,
    })
  ),
  on(TopUserArtistActions.loadTopUserArtistFailure, (state, action) => {
    throw new Error(action.error);
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
