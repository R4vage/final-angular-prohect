import { AlbumItem, Artist } from './album.models';
import { Track } from './track.models';

export interface PaginatedResponse {
  limit: number;
  next: null | number;
  offset: number;
  previous: null | number;
  total: number;
}

export interface UserAlbumsResponse extends PaginatedResponse {
  href: string;
  items: AlbumItem[];
}

export interface UserSavedTracksResponse extends PaginatedResponse {
  href: string;
  items: ResponseTracks[];
}

export interface UserTopTracksResponse extends PaginatedResponse {
    href: string;
    items: Track[];
  }

export interface ResponseTracks {
    track: Track
    added_at: string
}

export interface UserSavedArtistsResponse {
    artists:Artists
}

export interface UserTopArtistsResponse {
    href: string;
    items: Artist[];
}

interface Artists extends PaginatedResponse{
    href:string;
    items: Artist[]
}
