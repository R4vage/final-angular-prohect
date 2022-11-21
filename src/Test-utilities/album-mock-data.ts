import { Album, AlbumItem } from 'src/app/core/models/album.models';
import { UserAlbumsResponse } from 'src/app/core/models/rest.models';
import { trackMockData } from './track-mock-data';

export const albumMockData: AlbumItem[] = [
  {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1TA5sGRlKUJXBN4ZyJuDIX',
        },
        href: 'https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX',
        id: '1TA5sGRlKUJXBN4ZyJuDIX',
        name: 'Blessd',
        type: 'artist',
        uri: 'spotify:artist:1TA5sGRlKUJXBN4ZyJuDIX',
        images: [
          {
            height: 0,
            url: 'string',
            width: 0,
          },
        ],
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4PR6koe67C7YosjAYriYh4',
    },
    href: 'https://api.spotify.com/v1/albums/4PR6koe67C7YosjAYriYh4',
    id: '4PR6koe67C7YosjAYriYh4',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2734c88949535e3089844c61219',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e024c88949535e3089844c61219',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048514c88949535e3089844c61219',
        width: 64,
      },
    ],
    name: 'Siempre Blessd',
    release_date: '2022-11-03',
    release_date_precision: 'day',
    total_tracks: 13,
    type: 'album',
    uri: 'spotify:album:4PR6koe67C7YosjAYriYh4',
  },
  {
    album_type: 'single',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/77ziqFxp5gaInVrF2lj4ht',
        },
        href: 'https://api.spotify.com/v1/artists/77ziqFxp5gaInVrF2lj4ht',
        id: '77ziqFxp5gaInVrF2lj4ht',
        name: 'Sech',
        type: 'artist',
        uri: 'spotify:artist:77ziqFxp5gaInVrF2lj4ht',
        images: [
          {
            height: 0,
            url: 'string;',
            width: 0,
          },
        ],
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/1yENOcHrdeylQ4Mjy1DQJX',
    },
    href: 'https://api.spotify.com/v1/albums/1yENOcHrdeylQ4Mjy1DQJX',
    id: '1yENOcHrdeylQ4Mjy1DQJX',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273d9bae3fb6c6ac1c5aa67744f',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02d9bae3fb6c6ac1c5aa67744f',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851d9bae3fb6c6ac1c5aa67744f',
        width: 64,
      },
    ],
    name: 'Ya Casi Vienen',
    release_date: '2022-10-28',
    release_date_precision: 'day',
    total_tracks: 4,
    type: 'album',
    uri: 'spotify:album:1yENOcHrdeylQ4Mjy1DQJX',
  },
  {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/27vNK840zYq6IfDijHPsv1',
        },
        href: 'https://api.spotify.com/v1/artists/27vNK840zYq6IfDijHPsv1',
        id: '27vNK840zYq6IfDijHPsv1',
        name: 'Gilberto Santa Rosa',
        type: 'artist',
        uri: 'spotify:artist:27vNK840zYq6IfDijHPsv1',
        images: [
          {
            height: 0,
            url: 'string;',
            width: 0,
          },
        ],
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4uBIS6rAEZQX8NCDgoLKq2',
    },
    href: 'https://api.spotify.com/v1/albums/4uBIS6rAEZQX8NCDgoLKq2',
    id: '4uBIS6rAEZQX8NCDgoLKq2',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b27383c59f3102bcc5eccc985475',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e0283c59f3102bcc5eccc985475',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d0000485183c59f3102bcc5eccc985475',
        width: 64,
      },
    ],
    name: 'Debut y Segunda Tanda (Deluxe)',
    release_date: '2022-10-28',
    release_date_precision: 'day',
    total_tracks: 10,
    type: 'album',
    uri: 'spotify:album:4uBIS6rAEZQX8NCDgoLKq2',
  },
  {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1vqR17Iv8VFdzure1TAXEq',
        },
        href: 'https://api.spotify.com/v1/artists/1vqR17Iv8VFdzure1TAXEq',
        id: '1vqR17Iv8VFdzure1TAXEq',
        name: 'LIT killah',
        type: 'artist',
        uri: 'spotify:artist:1vqR17Iv8VFdzure1TAXEq',
        images: [
          {
            height: 0,
            url: 'string;',
            width: 0,
          },
        ],
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/1O0VHFd6xTl1CfLausE0kN',
    },
    href: 'https://api.spotify.com/v1/albums/1O0VHFd6xTl1CfLausE0kN',
    id: '1O0VHFd6xTl1CfLausE0kN',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273618c9be5ab68c6663b5271b4',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02618c9be5ab68c6663b5271b4',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851618c9be5ab68c6663b5271b4',
        width: 64,
      },
    ],
    name: 'SnipeZ',
    release_date: '2022-10-27',
    release_date_precision: 'day',
    total_tracks: 13,
    type: 'album',
    uri: 'spotify:album:1O0VHFd6xTl1CfLausE0kN',
  },
  {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1hcdI2N1023RvSwLzTtdsp',
        },
        href: 'https://api.spotify.com/v1/artists/1hcdI2N1023RvSwLzTtdsp',
        id: '1hcdI2N1023RvSwLzTtdsp',
        name: 'Natalia Lafourcade',
        type: 'artist',
        uri: 'spotify:artist:1hcdI2N1023RvSwLzTtdsp',
        images: [
          {
            height: 0,
            url: 'string;',
            width: 0,
          },
        ],
      },
    ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4BJoDX0fIjR4RsFF4vyd81',
    },
    href: 'https://api.spotify.com/v1/albums/4BJoDX0fIjR4RsFF4vyd81',
    id: '4BJoDX0fIjR4RsFF4vyd81',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273164f6eeb838f0a702d9d6319',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02164f6eeb838f0a702d9d6319',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851164f6eeb838f0a702d9d6319',
        width: 64,
      },
    ],
    name: 'De Todas las Flores',
    release_date: '2022-10-28',
    release_date_precision: 'day',
    total_tracks: 12,
    type: 'album',
    uri: 'spotify:album:4BJoDX0fIjR4RsFF4vyd81',
  },
];

export const albumWithTracksMockData: Album = {
  album_type: 'album',
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/1TA5sGRlKUJXBN4ZyJuDIX',
      },
      href: 'https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX',
      id: '1TA5sGRlKUJXBN4ZyJuDIX',
      name: 'Blessd',
      type: 'artist',
      uri: 'spotify:artist:1TA5sGRlKUJXBN4ZyJuDIX',
      images: [
        {
          height: 0,
          url: 'string;',
          width: 0,
        },
      ],
    },
  ],
  available_markets: [],
  copyrights: [
    {
      text: 'Distributed by Warner Music Latina, © 2022 JM WORLD MUSIC - CIGOL',
      type: 'C',
    },
    {
      text: 'Distributed by Warner Music Latina, ℗ 2022 JM WORLD MUSIC - CIGOL',
      type: 'P',
    },
  ],
  external_ids: {
    upc: '5054197415906',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/album/4PR6koe67C7YosjAYriYh4',
  },
  genres: [],
  href: 'https://api.spotify.com/v1/albums/4PR6koe67C7YosjAYriYh4',
  id: '4PR6koe67C7YosjAYriYh4',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2734c88949535e3089844c61219',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e024c88949535e3089844c61219',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048514c88949535e3089844c61219',
      width: 64,
    },
  ],
  label: 'WEA Latina',
  name: 'Siempre Blessd',
  popularity: 68,
  release_date: '2022-11-03',
  release_date_precision: 'day',
  total_tracks: 13,
  tracks: {
    href: 'https://api.spotify.com/v1/albums/4PR6koe67C7YosjAYriYh4/tracks?offset=0&limit=50&locale=es-419,es',
    items: [
      trackMockData
      
    ],
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 13,
  },
  type: 'album',
  uri: 'spotify:album:4PR6koe67C7YosjAYriYh4',
};


export const userAlbumsResponseMock: UserAlbumsResponse = {
  href: 'mock',
  items: [{
    added_at: 'mock',
    album: albumMockData[0]
  }],
  limit: 50,
  next: null,
  offset: 0,
  previous: null,
  total: 13,
}
