import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AlbumsActions from '../actions/albums.actions';
import { AlbumItem } from 'src/app/core/models/album.models';

export const albumsesFeatureKey = 'albums';

export interface AlbumState extends EntityState<AlbumItem> {
  allAlbumsLoaded: boolean;
}

export const adapter: EntityAdapter<AlbumItem> = createEntityAdapter<AlbumItem>();

export const albumsInitialState: AlbumState = adapter.getInitialState({
  allAlbumsLoaded: false,
});

export const reducer = createReducer(
  albumsInitialState,
  on(AlbumsActions.allAlbumsLoaded, (state, action) => adapter.setAll(action.albums, { ...state, allAlbumsLoaded: true })),
  on(AlbumsActions.addAlbum, (state, action) => adapter.addOne(action.album, state)),
  on(AlbumsActions.upsertAlbum, (state, action) => adapter.upsertOne(action.album, state)),
  on(AlbumsActions.addAlbums, (state, action) => adapter.addMany(action.albums, state)),
  on(AlbumsActions.upsertAlbums, (state, action) => adapter.upsertMany(action.albums, state)),
  on(AlbumsActions.updateAlbum, (state, action) => adapter.updateOne(action.album, state)),
  on(AlbumsActions.updateAlbums, (state, action) => adapter.updateMany(action.albums, state)),
  on(AlbumsActions.deleteAlbum, (state, action) => adapter.removeOne(action.id, state)),
  on(AlbumsActions.deleteAlbums, (state, action) => adapter.removeMany(action.ids, state)),
  on(AlbumsActions.clearAlbums, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
