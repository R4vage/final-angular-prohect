import { albumWithTracksMockData } from 'src/Test-utilities/album-mock-data';
import { AlbumTotalDurationPipe } from '../album-total-duration.pipe';

describe('AlbumTotalDurationPipe', () => {
  let pipe: AlbumTotalDurationPipe;
  beforeEach(() => {
    pipe = new AlbumTotalDurationPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it("should give the total Album's duration in seconds", () => {
    const albumTest = albumWithTracksMockData;
    const durationAlbumData = 2598;
    const dataTransformed = pipe.transform(albumTest);

    expect(Math.floor(dataTransformed)).toBe(Math.floor(durationAlbumData));
  });
});
