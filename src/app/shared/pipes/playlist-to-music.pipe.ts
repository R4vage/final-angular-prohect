import { Pipe, PipeTransform } from '@angular/core';
import { MusicCard } from 'src/app/core/models/music-card.models';
import { PlaylistItem } from 'src/app/core/models/playlist.models';

@Pipe({
  name: 'playlistToMusic',
})
export class PlaylistToMusicPipe implements PipeTransform {
  transform(playlist: PlaylistItem): MusicCard {
    const defaultImage = 'assets/images/image-not-found.png';
    return {
      title: playlist.name,
      imageUrl:
        playlist.images.find((image) => {
          return typeof image.url === 'string';
        })?.url || defaultImage,
      artist: playlist.owner.display_name,
      description: playlist.description,
    };
  }
}
