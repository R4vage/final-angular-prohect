import { Pipe, PipeTransform } from '@angular/core';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { MusicCard } from 'src/app/core/models/music-card.models';

@Pipe({
  name: 'categoryToMusic',
})
export class CategoryToMusicPipe implements PipeTransform {
  transform(category: CategoryItem): MusicCard {
    const defaultImage = 'assets/images/image-not-found.png';
    return {
      title: category.name,
      imageUrl:
        category.icons.find((image) => {
          return typeof image.url === 'string';
        })?.url || defaultImage,
    };
  }
}
