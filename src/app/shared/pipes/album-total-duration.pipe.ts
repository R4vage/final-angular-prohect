import { Pipe, PipeTransform } from '@angular/core';
import { Album } from 'src/app/core/models/album.models';

@Pipe({
  name: 'albumTotalDuration',
})
export class AlbumTotalDurationPipe implements PipeTransform {
  transform(album: Album): number {
    return (
      album.tracks.items
        .map((track) => track.duration_ms)
        .reduce((previous, next) => {
          return previous + next;
        }) / 1000
    );
  }
}
