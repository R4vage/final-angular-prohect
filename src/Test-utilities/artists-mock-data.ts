import { ArtistRelatedArtist } from 'src/app/artist-page/artist-related-artist.model';
import {
  ArtistAlbums,
  ArtistDetails,
  ArtistRelatedArtists,
  ArtistTopTracks,
} from 'src/app/core/models/artist.models';
import { Artist } from 'src/app/core/models/track.models';
import { trackMockData } from './track-mock-data';

export const artistMockData: Artist[] = [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/0UZq6vAHrwGgctvxTzzxYm',
    },
    href: 'https://api.spotify.com/v1/artists/0UZq6vAHrwGgctvxTzzxYm',
    id: '0UZq6vAHrwGgctvxTzzxYm',
    name: 'Tokyo Ska Paradise Orchestra',
    type: 'artist',
    uri: 'spotify:artist:0UZq6vAHrwGgctvxTzzxYm',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1qM11R4ylJyQiPJ0DffE9z',
    },
    href: 'https://api.spotify.com/v1/artists/1qM11R4ylJyQiPJ0DffE9z',
    id: '1qM11R4ylJyQiPJ0DffE9z',
    name: 'Lilas Ikuta',
    type: 'artist',
    uri: 'spotify:artist:1qM11R4ylJyQiPJ0DffE9z',
  },
];

export const artistDetailsMockData: ArtistDetails = {
  externals_urls: {
    spotify: 'mock',
  },
  followers: {
    href: null,
    total: 123,
  },
  genres: [],
  href: 'mock',
  id: 'mock',
  images: [],
  name: 'mock',
  popularity: 12,
  type: 'mock',
  uri: 'mock',
};

export const artistAlbumsMock: ArtistAlbums = {
  href: 'mock',
  items: [],
  limit: 12,
  next: 'mock',
  offset: 12,
  previous: 'mock',
  total: 3,
};

export const artistTopTrackMock: ArtistTopTracks = { tracks: [trackMockData] };

export const artistRelatedArtistsMock: ArtistRelatedArtists = {
  artists: artistMockData,
};
