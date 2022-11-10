import { MusicCard } from 'src/app/core/models/music-card.models';
import { PlaylistItem } from 'src/app/core/models/playlist.models';
import TestFunctionsUtilities from 'src/Test-utilities/test-utilites-functions';
import { PlaylistToMusicPipe } from '../playlist-to-music.pipe';

describe('PlaylistToMusicPipe', () => {
  let pipe: PlaylistToMusicPipe;
  beforeEach(() => {
    pipe = new PlaylistToMusicPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform an Playlist to a music element', () => {
    const playlist: PlaylistItem = TestFunctionsUtilities.getFirstPlaylist();
    const music: MusicCard = {
      title: playlist.name,
      imageUrl: playlist.images[0].url,
      artist: playlist.owner.display_name,
      description: playlist.description,
    };
    expect(pipe.transform(playlist)).toEqual(music);
  });

  it('should give a default image if no image is found', () => {
    const playlist: PlaylistItem = {
      ...TestFunctionsUtilities.getFirstPlaylist(),
      images: [],
    };

    const music: MusicCard = {
      title: playlist.name,
      imageUrl: 'assets/images/image-not-found.png',
      artist: playlist.owner.display_name,
      description: playlist.description,
    };

    expect(pipe.transform(playlist)).toEqual(music);
  });
});
