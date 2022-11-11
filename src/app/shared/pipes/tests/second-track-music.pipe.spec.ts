import { SecondTrackMusicPipe } from '../second-track-music.pipe';

describe('SecondTrackMusicPipe', () => {
  let pipe: SecondTrackMusicPipe;
  beforeEach(() => {
    pipe = new SecondTrackMusicPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform seconds in correct format', () => {
    let secondTest = 121;
    let transformedData = pipe.transform(secondTest);
    expect(transformedData).toBe('02:01');

    secondTest = 3000;
    transformedData = pipe.transform(secondTest);
    expect(transformedData).toBe('50:00');

    secondTest = 29;
    transformedData = pipe.transform(secondTest);
    expect(transformedData).toBe('00:29');
  });
});
