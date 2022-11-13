import { Pipe, PipeTransform } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist.models';
import { Track } from 'src/app/core/models/track.models';

@Pipe({
  name: 'tracksFromPlaylist',
})
export class TracksFromPlaylistPipe implements PipeTransform {
  transform(playlist: Playlist): Track[] | undefined {
    return playlist.tracks.items?.map((item) => item.track).slice(0, 50);
  }
}
