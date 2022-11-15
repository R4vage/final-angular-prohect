import { AlbumItem, Artist } from '../core/models/album.models';
import { Playlist } from '../core/models/playlist.models';
import { Track } from '../core/models/track.models';

export function prepareIdArray(
  itemArray: Artist[] | AlbumItem[] | Track[] | Playlist[]
) {
  let arrayIds: string[] = [];
  itemArray.map((item) => {
    arrayIds.push(item.id);
  });
  return arrayIds;
}
