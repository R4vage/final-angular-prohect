import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistAlbumsActions from '../actions/artist-albums.actions';
import { ArtistAlbums } from 'src/app/core/models/artist.models';
import { AlbumItem, Albums } from 'src/app/core/models/album.models';

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
  on(ArtistAlbumsActions.addArtistAlbums, (state) => state),
  on(ArtistAlbumsActions.upsertArtistAlbums, (state, action) =>
    adapter.upsertOne(action.artistAlbums, state)
  ),
  on(ArtistAlbumsActions.upsertArtistAlbumss, (state, action) =>
    adapter.upsertMany(action.artistAlbumss, state)
  ),
  on(ArtistAlbumsActions.updateArtistAlbums, (state, action) =>
    adapter.updateOne(action.artistAlbums, state)
  ),
  on(ArtistAlbumsActions.updateArtistAlbumss, (state, action) =>
    adapter.updateMany(action.artistAlbumss, state)
  ),
  on(ArtistAlbumsActions.deleteArtistAlbums, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArtistAlbumsActions.deleteArtistAlbumss, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  //on(ArtistAlbumsActions.load),
  //on(ArtistAlbumsActions.loadArtistAlbumss, (state, action) =>
  //  adapter.setAll(action.artistAlbumss, state)
  //),
  on(ArtistAlbumsActions.clearArtistAlbumss, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
