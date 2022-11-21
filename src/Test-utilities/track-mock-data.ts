import { UserSavedTracksResponse } from 'src/app/core/models/rest.models';
import { Track } from 'src/app/core/models/track.models';

export const trackMockData: Track = {
  album: {
    album_type: 'album',
    artists: [
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
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/7nKNFCbybw9WLy5P4wGm4w',
    },
    href: 'https://api.spotify.com/v1/albums/7nKNFCbybw9WLy5P4wGm4w',
    id: '7nKNFCbybw9WLy5P4wGm4w',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273b4d32739e136e672f913e8b8',
        width: 640,
      },
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273b4d32739e136e672f913e8b8',
        width: 640,
      },
    ],
    name: 'Free Free Free (feat.幾田りら)',
    release_date: '2022-07-27',
    release_date_precision: 'day',
    total_tracks: 4,
    type: 'album',
    uri: 'spotify:album:7nKNFCbybw9WLy5P4wGm4w',
  },
  artists: [
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
  ],
  available_markets: [],
  disc_number: 1,
  duration_ms: 254233,
  explicit: false,
  external_ids: {
    isrc: 'JPB602202729',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/1yoIBbCENxL0dSkkhy88iB',
  },
  href: 'https://api.spotify.com/v1/tracks/1yoIBbCENxL0dSkkhy88iB',
  id: '1yoIBbCENxL0dSkkhy88iB',
  is_local: false,
  name: 'Free Free Free - feat.幾田りら',
  popularity: 50,
  preview_url: 'https://p.scdn.co/mp3-preview/753b3d84774ae1a257bbd4fb114d0a33db06c83e?cid=1a742ee646b74af4a2a648a825f35326',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:1yoIBbCENxL0dSkkhy88iB',
};

export const userSavedTracksMock: UserSavedTracksResponse = {
  href: 'mock',
  items: [{
    added_at: 'mock',
    track: trackMockData
  }],
  limit: 50,
  next: null,
  offset: 0,
  previous: null,
  total: 13,
}