import {
  reducer,
  initialState,
  ArtRelatedArtists,
} from '../reducers/artist-related-artist.reducer';
import * as artistRelatedStoreActions from '../actions/artist-related-artist.actions';
import {
  artistDetailsMockData,
  artistMockData,
} from 'src/Test-utilities/artists-mock-data';

describe('ArtistDetails Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const artistRelated: ArtRelatedArtists = {
      id: artistDetailsMockData.id,
      results: { artists: artistMockData },
    };
    const action = artistRelatedStoreActions.addArtistRelatedArtistSuccess({
      artistRelatedArtist: artistRelated,
    });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(artistRelated.id);
    expect(state.entities[artistRelated.id]).toEqual(artistRelated);
  });

  it('should add array of items to store on add items', () => {
    const artistRelated: ArtRelatedArtists = {
      id: artistDetailsMockData.id,
      results: { artists: artistMockData },
    };;
    const action = artistRelatedStoreActions.addArtistRelatedArtists({
      artistRelatedArtists:[artistRelated]
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === artistRelated.id).toBeTrue();
    expect(state.entities[artistRelated.id]).toBe(artistRelated);
  });

  it('shouldnt modify store on add item call', () => {
    const artistRelated: ArtRelatedArtists = {
      id: artistDetailsMockData.id,
      results: { artists: artistMockData },
    };
    const action = artistRelatedStoreActions.addArtistRelatedArtist({
      artistId: artistRelated.id,
    });
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });
});
