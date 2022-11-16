import { AlbumItem } from './album.models';

export interface ArtistAlbums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
