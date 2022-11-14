import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from 'src/app/core/models/track.models';

@Pipe({
  name: 'listArtists',
})
export class ListArtistsPipe implements PipeTransform {
  transform(artistList: Artist[]): string {
    return artistList.map((artist) => artist.name).join(', ');
  }
}
