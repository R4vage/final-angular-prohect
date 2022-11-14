import { Track } from './track.models';

export interface MainPlaylistResponse {
  message: string;
  playlists: Playlists;
}

export interface Playlists {
  href: string;
  items: PlaylistItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers?: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Playlist extends PlaylistItem {
  followers: Followers;
}

export interface Followers {
  href: null;
  total: number;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: null;
  url: string;
  width: null;
}

export interface Owner {
  display_name?: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface Tracks {
  href: string;
  items?: Item[];
  limit?: number;
  next?: string | null;
  previous?: null;
  offset?: number;
  total: number;
}

export interface Item {
  added_at: Date;
  added_by: Owner;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
}

export interface VideoThumbnail {
  url: null;
}
