import { AlbumItem } from 'src/app/core/models/album.models';
import { MusicCard } from 'src/app/core/models/music-card.models';
import TestFunctionsUtilities from 'src/Test-utilities/test-utilites-functions';
import { AlbumToMusicPipe } from '../album-to-music.pipe';

describe('AlbumToMusicPipe', () => {
  let pipe: AlbumToMusicPipe;
  beforeEach(() => {
    pipe = new AlbumToMusicPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform an Album to a music element', () => {
    const album: AlbumItem = TestFunctionsUtilities.getFirstAlbum();
    const music: MusicCard = {
      title: album.name,
      imageUrl: album.images[0].url,
      artist: [album.artists[0].name],
      date: album.release_date,
    };
    expect(pipe.transform(album)).toEqual(music);
  });

  it('should give a default image if no image is found', () => {
    const album: AlbumItem = {
      ...TestFunctionsUtilities.getFirstAlbum(),
      images: [],
    };

    const music: MusicCard = {
      title: album.name,
      imageUrl: 'assets/images/image-not-found.png',
      artist: [album.artists[0].name],
      date: album.release_date,
    };

    expect(pipe.transform(album)).toEqual(music);
  });
});
