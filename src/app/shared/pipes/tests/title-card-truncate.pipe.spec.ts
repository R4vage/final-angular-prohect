import { TitleCardTruncatePipe } from '../title-card-truncate.pipe';

describe('TitleCardTruncatePipe', () => {
  let pipe: TitleCardTruncatePipe;
  beforeEach(() => {
    pipe = new TitleCardTruncatePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not do nothing with a string of length less than 15', () => {
    const str = '123456789';

    expect(pipe.transform(str)).toBe(str);
  });

  it("should slice string and add '...' when length is greater than 15", () => {
    const str = '1234567890abcdef';
    const slicedStr = '1234567890abcde...';

    expect(pipe.transform(str)).toBe(slicedStr);
  });
});
