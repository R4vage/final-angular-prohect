import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistAlbumsActions from '../actions/artist-albums.actions';
import { Albums } from 'src/app/core/models/album.models';

export interface ArtAlbums {
  id: string;
  results: Albums;
}

export const artistAlbumsesFeatureKey = 'artistAlbums';

export interface ArtistAlbumsState extends EntityState<ArtAlbums> {}

export const adapter: EntityAdapter<ArtAlbums> =
  createEntityAdapter<ArtAlbums>();

export const initialState: ArtistAlbumsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtistAlbumsActions.addArtistAlbumsSuccess, (state, action) =>
    adapter.addOne(action.artistAlbums, state)
  ),
  on(ArtistAlbumsActions.addArtistAlbums, (state) => state)
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
