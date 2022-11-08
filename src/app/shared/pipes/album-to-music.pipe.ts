import { Pipe, PipeTransform } from '@angular/core';
import { Image, Item } from 'src/app/core/models/album.models';
import { MusicCard } from 'src/app/core/models/music-card.models';

@Pipe({
  name: 'albumToMusic',
})
export class AlbumToMusicPipe implements PipeTransform {
  transform(album: Item): MusicCard {
    const defaultImage = 'assets/images/image-not-found.png';

    return {
      title: album.name,
      imageUrl:
        album.images.find((image) => {
          return image.width >= 100;
        })?.url || defaultImage,
      artist: album.artists.map((artist) => {
        return artist.name;
      }),
      date: album.release_date,
    };
  }
}
