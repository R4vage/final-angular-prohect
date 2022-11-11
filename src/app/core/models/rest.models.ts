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

export interface UserTracksResponse extends PaginatedResponse {
  href: string;
  items: ResponseTracks[];
}

export interface ResponseTracks {
    track: Track
    added_at: string
}

export interface UserArtistsResponse {
    artists:Artists
}

interface Artists extends PaginatedResponse{
    href:string;
    items: Artist[]
}
