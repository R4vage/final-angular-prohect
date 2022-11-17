import { AlbumItem, Artist, Image } from './album.models';
import { Track } from './track.models';

export interface ArtistAlbums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface ArtistDetails {
  externals_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ArtistTopTracks {
  tracks: Track[];
}

export interface ArtistRelatedArtists {
  artists: Artist[];
}
