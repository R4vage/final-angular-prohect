import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtistRelatedArtists from '../reducers/artist-related-artist.reducer';

export const selectArtistRelatedArtistsState =
  createFeatureSelector<fromArtistRelatedArtists.ArtistRelatedArtistsState>(
    'artistRelatedArtists'
  );

export const selectAllSearchEntities = createSelector(
  selectArtistRelatedArtistsState,
  fromArtistRelatedArtists.selectEntities
);

export function artistRelatedArtistsHasBeenDone(id: string) {
  return createSelector(
    selectArtistRelatedArtistsState,
    (artistRelatedArtist) => {
      return (artistRelatedArtist.ids as string[]).includes(id);
    }
  );
}

export function selectArtistRelatedArtistsByValue(artistId: string) {
  return createSelector(selectAllSearchEntities, (state) => state[artistId]);
}
