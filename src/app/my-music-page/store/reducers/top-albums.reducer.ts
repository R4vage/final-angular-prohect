import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TopUserAlbumActions from '../actions/top-albums.actions';
import { AlbumItem } from 'src/app/core/models/album.models';

export const topUserAlbumsFeatureKey = 'topUserAlbums';

export interface TopUserAlbumsState extends EntityState<AlbumItem> {
  topAlbumsLoaded: boolean;
  totalItems:number;
}

export const adapter: EntityAdapter<AlbumItem> =
  createEntityAdapter<AlbumItem>();

export const initialState: TopUserAlbumsState = adapter.getInitialState({
  topAlbumsLoaded: false,
  totalItems: 0
});

export const reducer = createReducer(
  initialState,
  on(TopUserAlbumActions.addTopUserAlbum, (state, action) =>
    adapter.addOne(action.topUserAlbum, state)
  ),
  on(TopUserAlbumActions.upsertTopUserAlbum, (state, action) =>
    adapter.upsertOne(action.topUserAlbum, state)
  ),
  on(TopUserAlbumActions.addTopUserAlbums, (state, action) =>
    adapter.addMany(action.topUserAlbums, state)
  ),
  on(TopUserAlbumActions.upsertTopUserAlbums, (state, action) =>
    adapter.upsertMany(action.topUserAlbums, state)
  ),
  on(TopUserAlbumActions.updateTopUserAlbum, (state, action) =>
    adapter.updateOne(action.topUserAlbum, state)
  ),
  on(TopUserAlbumActions.updateTopUserAlbums, (state, action) =>
    adapter.updateMany(action.topUserAlbums, state)
  ),
  on(TopUserAlbumActions.deleteTopUserAlbum, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TopUserAlbumActions.deleteTopUserAlbums, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(TopUserAlbumActions.loadTopUserAlbums, (state) => {return state}),
  on(TopUserAlbumActions.loadTopUserAlbumsSuccess, (state, action) =>
    adapter.setAll(action.topUserAlbums, { ...state, topAlbumsLoaded: true, totalItems:action.totalItems })
  ),
  on(TopUserAlbumActions.loadTopUserAlbumsFailure, (state, action) => {
    throw new Error(action.error);
  }),
  on(TopUserAlbumActions.clearTopUserAlbums, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
