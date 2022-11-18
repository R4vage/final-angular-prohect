import { AlbumItem, Artist } from '../core/models/album.models';
import { Item, Playlist } from '../core/models/playlist.models';
import { Track } from '../core/models/track.models';

export function prepareIdArray(
  itemArray: Artist[] | AlbumItem[] | Track[] | Playlist[] 
): string[] {
  let arrayIds: string[] = [];
  itemArray.map((item) => {
    arrayIds.push(item.id);
  });
  return arrayIds;
}

export function prepareIdArrayFromItems(itemArray: Item[]) {
  let arrayIds: string[] = []
  itemArray.map((item) => {
    arrayIds.push(item.track.id)
  })
  return arrayIds
}