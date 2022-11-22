import { albumWithTracksMockData } from 'src/Test-utilities/album-mock-data'
import { artistAlbumsMock } from 'src/Test-utilities/artists-mock-data'
import { playlistMockItem } from 'src/Test-utilities/store-mocks-data'
import { trackMockData } from 'src/Test-utilities/track-mock-data'
import * as savedItemHelpers from '../saved-item.helpers'

describe('Saved Item Helpers', () => {
    it('Should get ids from an array of tracks', () => {
        const ids = savedItemHelpers.prepareIdArray(albumWithTracksMockData.tracks.items);
        expect(ids[0]).toBe(albumWithTracksMockData.tracks.items[0].id)
    })

    it('Should get ids from an Item[]', () => {
        const itemArray = playlistMockItem.tracks.items
        const ids = savedItemHelpers.prepareIdArrayFromItems(itemArray)
        expect(ids[0]).toBe(itemArray[0].track.id)
    })
})