import { ImageInfo } from "./extras.models";

export interface Main {
  albums: Albums;
}

export interface Albums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface AlbumItem {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  copyrights?: Copyright[];
  external_ids?: ExternalIDS;
  external_urls: ExternalUrls;
  genres?: string[];
  href: string;
  id: string;
  images: Image[];
  label?: string;
  name: string;
  popularity?: number;
  release_date: Date | string;
  release_date_precision: string;
  total_tracks: number;
  tracks?: Tracks;
  type: string;
  uri: string;
}

export interface Album extends AlbumItem {
  copyrights: Copyright[];
  external_ids: ExternalIDS;
  genres: string[];
  label: string;
  popularity: number;
  tracks: Tracks;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface Tracks {
  href: string;
  items: TrackItem[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface TrackItem {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  images: ImageInfo[]
}

export interface ExternalUrls {
  spotify: string;
}

export interface ExternalIDS {
  upc: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
