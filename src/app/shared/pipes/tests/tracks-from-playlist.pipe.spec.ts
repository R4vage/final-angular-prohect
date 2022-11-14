import { TracksFromPlaylistPipe } from '../tracks-from-playlist.pipe';

describe('TracksFromPlaylistPipe', () => {
  it('create an instance', () => {
    const pipe = new TracksFromPlaylistPipe();
    expect(pipe).toBeTruthy();
  });
});
