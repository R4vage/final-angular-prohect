import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtists from '../reducers/top-artists.reducer';

export const selectTopArtistsState = createFeatureSelector<fromArtists.TopUserArtistState>('topUserArtists');

export const selectAllTopArtists = createSelector(selectTopArtistsState, fromArtists.selectAll);

export const selectAreTopArtistsLoaded = createSelector(selectTopArtistsState, (state) => {
  return state.topUserArtistsLoaded;
});
