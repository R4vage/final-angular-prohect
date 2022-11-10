import { CategoryItem } from 'src/app/core/models/categories.models';
import { MusicCard } from 'src/app/core/models/music-card.models';
import TestFunctionsUtilities from 'src/Test-utilities/test-utilites-functions';
import { CategoryToMusicPipe } from '../category-to-music.pipe';

describe('CategoryToMusicPipe', () => {
  let pipe: CategoryToMusicPipe;
  beforeEach(() => {
    pipe = new CategoryToMusicPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform an Category to a music element', () => {
    const category: CategoryItem = TestFunctionsUtilities.getFirstCategory();
    const music: MusicCard = {
      title: category.name,
      imageUrl: category.icons[0].url,
    };
    expect(pipe.transform(category)).toEqual(music);
  });

  it('should give a default image if no image is found', () => {
    const category: CategoryItem = {
      ...TestFunctionsUtilities.getFirstCategory(),
      icons: [],
    };

    const music: MusicCard = {
      title: category.name,
      imageUrl: 'assets/images/image-not-found.png',
    };

    expect(pipe.transform(category)).toEqual(music);
  });
});
