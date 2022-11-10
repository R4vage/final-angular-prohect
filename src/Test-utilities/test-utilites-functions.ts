import { AlbumItem } from 'src/app/core/models/album.models';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { PlaylistItem } from 'src/app/core/models/playlist.models';
import * as AlbumMock from './album-mock-data';
import * as CategoryMock from './categories-mock-data';
import * as PlaylistMock from './playlist-mock-data';

export default class TestFunctionsUtilities {
  static getFirstAlbum(): AlbumItem {
    return AlbumMock.albumMockData[0];
  }

  static getFirstPlaylist(): PlaylistItem {
    return PlaylistMock.playlistsMockData[0];
  }

  static getFirstCategory(): CategoryItem {
    return CategoryMock.categoriesMockData[0];
  }
}
