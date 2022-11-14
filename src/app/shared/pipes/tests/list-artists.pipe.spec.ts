import { artistMockData } from 'src/Test-utilities/artists-mock-data';
import { ListArtistsPipe } from '../list-artists.pipe';

describe('ListArtistsPipe', () => {
  let pipe: ListArtistsPipe;
  beforeEach(() => {
    pipe = new ListArtistsPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform artist list into a string', () => {
    const artists = artistMockData;

    const dataTransformed = pipe.transform(artists);

    expect(dataTransformed).toBe('Tokyo Ska Paradise Orchestra, Lilas Ikuta');
  });
});
