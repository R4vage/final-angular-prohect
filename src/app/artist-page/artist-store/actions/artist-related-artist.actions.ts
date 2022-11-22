import { createAction, props } from '@ngrx/store';
import { ArtRelatedArtists } from '../reducers/artist-related-artist.reducer';

export const addArtistRelatedArtist = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtist',
  props<{ artistId: string }>()
);

export const addArtistRelatedArtistSuccess = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtist Success',
  props<{ artistRelatedArtist: ArtRelatedArtists }>()
);

export const addArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtists',
  props<{ artistRelatedArtists: ArtRelatedArtists[] }>()
);
