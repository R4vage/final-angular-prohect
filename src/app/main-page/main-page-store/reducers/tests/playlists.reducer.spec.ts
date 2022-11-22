import { playlistInitialState, reducer } from '../playlists.reducer';
import * as playlistStoreActions from '../../actions/playlists.actions'
import { Playlist, PlaylistItem } from 'src/app/core/models/playlist.models';
import { playlistMockItem, playlistsMockStore } from 'src/Test-utilities/store-mocks-data';
import { playlistsMockData } from 'src/Test-utilities/playlist-mock-data';

describe('Playlist Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(playlistInitialState);
  });

  it('should add one item to store on add item', () => {
    const playlist: Playlist = playlistMockItem;
    const action = playlistStoreActions.addPlaylist({ playlist });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(playlist.id);
    expect(state.entities[playlist.id]).toEqual(playlist);
  });

  it('should add one item to store on upsert item', () => {
    const playlist: Playlist = playlistMockItem;
    const action = playlistStoreActions.upsertPlaylist({ playlist });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(playlist.id);
    expect(state.entities[playlist.id]).toEqual(playlist);
  });

  it('should load items on load Item', () => {
    const playlists: PlaylistItem[] = playlistsMockData;
    const action = playlistStoreActions.allPlaylistsLoaded({ playlists });
    const state = reducer(undefined, action);
    expect(state.allPlaylistsLoaded).toBeTrue();
    expect(state.entities[playlists[0].id]).toEqual(playlists[0]);
  });
});
