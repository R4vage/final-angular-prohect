import { reducer, initialState, ArtDetail } from '../reducers/artist-detail.reducer';
import * as artistDetailsStoreActions from '../actions/artist-detail.actions'
import { artistDetailsMockData } from 'src/Test-utilities/artists-mock-data';

describe('ArtistDetails Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const artistDetail: ArtDetail = {id:artistDetailsMockData.id, results:artistDetailsMockData};
    const action = artistDetailsStoreActions.addArtistDetailSuccess({ artistDetail});
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(artistDetail.id);
    expect(state.entities[artistDetail.id]).toEqual(artistDetail);
  });

  it('should add array of items to store on add items', () => {
    const artistDetails = [{id:artistDetailsMockData.id, results:artistDetailsMockData}];
    const action = artistDetailsStoreActions.addArtistDetails({artistDetails});
    const state = reducer(initialState, action);
    expect(state.ids[0] === artistDetails[0].id).toBeTrue();
    expect(state.entities[artistDetails[0].id]).toBe(artistDetails[0])
  });

  it('shouldnt modify store on add item call', () => {
    const artistDetail: ArtDetail = {id:artistDetailsMockData.id, results:artistDetailsMockData};
    const action = artistDetailsStoreActions.addArtistDetail({ artistId: artistDetail.id});
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

});
