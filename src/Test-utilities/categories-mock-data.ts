import { CategoryItem } from 'src/app/core/models/categories.models';

export const categoriesMockData: CategoryItem[] = [
  {
    href: 'https://api.spotify.com/v1/browse/categories/toplists',
    icons: [
      {
        height: 275,
        url: 'https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg',
        width: 275,
      },
    ],
    id: 'toplists',
    name: 'Listas de éxitos',
  },
  {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFGcCCKMatU5w',
    icons: [
      {
        height: null,
        url: 'https://t.scdn.co/images/a6e0ee5e3cc648f694d8071fc49b1552.jpeg',
        width: null,
      },
    ],
    id: '0JQ5DAqbMKFGcCCKMatU5w',
    name: 'Hecho en Colombia',
  },
  {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFF1br7dZcRtK',
    icons: [
      {
        height: null,
        url: 'https://t.scdn.co/images/c5495b9f0f694ffcb39c9217d4ed4375',
        width: null,
      },
    ],
    id: '0JQ5DAqbMKFF1br7dZcRtK',
    name: 'Orgullo',
  },
  {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFPw634sFwguI',
    icons: [
      {
        height: null,
        url: 'https://t.scdn.co/images/084155aeaa724ea1bd393a017d67b709',
        width: null,
      },
    ],
    id: '0JQ5DAqbMKFPw634sFwguI',
    name: 'EQUAL',
  },
  {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOOxftoKZxod',
    icons: [
      {
        height: null,
        url: 'https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png',
        width: null,
      },
    ],
    id: '0JQ5DAqbMKFOOxftoKZxod',
    name: 'RADAR',
  },
];

export const categoryWithPlaylists: CategoryItem = {
  href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOOxftoKZxod',
  icons: [
    {
      height: null,
      url: 'https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png',
      width: null,
    },
  ],
  id: '0JQ5DAqbMKFOOxftoKZxod',
  name: 'RADAR',
  playlists: {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOOxftoKZxod/playlists?country=CO&offset=0&limit=20',
    items: [
      {
        collaborative: false,
        description: 'Descubre los nuevos talentos de Colombia, Ecuador, Venezuela y Perú',
        external_urls: {
          spotify: '',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbzFWXFlsp56',
        id: '37i9dQZF1DXbzFWXFlsp56',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000032bb02a337c6b257bad539d44',
            width: null,
          },
        ],
        name: 'Radar Andinos',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2MzkwOTIwMSwwMDAwMDAwMGNhMjAxYjlkNjY3MjlkN2FlMGE0YzljODBkN2U0ODc3',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbzFWXFlsp56/tracks',
          total: 30,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DXbzFWXFlsp56',
      },
      {
        collaborative: false,
        description: 'From across the globe. New artists on the horizon. Cover: Cat Burns.',
        external_urls: {
          spotify: '',
        },
        href: '',
        id: '37i9dQZF1DWTU63finroJM',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003c212e30a97f8d1e6066363b7',
            width: null,
          },
        ],
        name: 'RADAR Global',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODE1Njg1MiwwMDAwMDAwMDg3N2VhZTQxYTY3NGExNzRiNzg2YmIyMDhmOTk5YTFj',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTU63finroJM/tracks',
          total: 246,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWTU63finroJM',
      },
      {
        collaborative: false,
        description: 'Doechii is our newest RADAR artist.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWY0DyDKedRYY',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWY0DyDKedRYY',
        id: '37i9dQZF1DWY0DyDKedRYY',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f0000000354ef79688c5f29a018d80deb',
            width: null,
          },
        ],
        name: 'RADAR US',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NTYzMzYwMSwwMDAwMDAwMGJkMzc4MDhkZWJkYWVkOGY0NDU2MWI3YTE5OTI4MGZi',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWY0DyDKedRYY/tracks',
          total: 56,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWY0DyDKedRYY',
      },
      {
        collaborative: false,
        description:
          'The most exciting new artists on the rise from the African continent & diaspora',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWYc8Z858eGwP',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYc8Z858eGwP',
        id: '37i9dQZF1DWYc8Z858eGwP',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000039875ad3269d6663408637b19',
            width: null,
          },
        ],
        name: 'Radar Africa',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NzUyMDAwMSwwMDAwMDAwMDEyNzNjNDY5YWNlYzU2MDIzNDU1NTFiOWEzYzU4YTll',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYc8Z858eGwP/tracks',
          total: 50,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWYc8Z858eGwP',
      },
      {
        collaborative: false,
        description: 'Welcome to RADAR: A space for storytelling going beyond the music featuring Sam Ezeh, LOVA, Mina Okabe, Augustine & IVAN$ITO from the Nordics!',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWV7gN1qBoBYg',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWV7gN1qBoBYg',
        id: '37i9dQZF1DWV7gN1qBoBYg',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000031f8baa542f6b25db34ce2db2',
            width: null,
          },
        ],
        name: 'RADAR Nordics',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY1MDkxNTYyNCwwMDAwMDAwMDgyMzFjN2JiZDRiOGExZTk2ZmMzMmU1NDdlYzNlM2Rk',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWV7gN1qBoBYg/tracks',
          total: 50,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWV7gN1qBoBYg',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX9IALXsyt8zk',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX9IALXsyt8zk',
        id: '37i9dQZF1DX9IALXsyt8zk',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003bd01fae38e50478936bdc997',
            width: null,
          },
        ],
        name: 'RADAR Korea',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODA5ODUwMiwwMDAwMDAwMDY0YTgzMWY3ZDRiZDI5YzkzMjc0N2U3MjJlY2M0YmU0',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX9IALXsyt8zk/tracks',
          total: 50,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX9IALXsyt8zk',
      },
      {
        collaborative: false,
        description: 'Discover new artists on the horizon.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWVp4cWdnm5ws',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVp4cWdnm5ws',
        id: '37i9dQZF1DWVp4cWdnm5ws',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000036460433f8f573078a65affc5',
            width: null,
          },
        ],
        name: 'RADAR Philippines',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2Njg4NjQwMSwwMDAwMDAwMGZhODkxNTFjYzY0ZTJkMGFkOWNiOGM0ODQwM2M0YjI1',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVp4cWdnm5ws/tracks',
          total: 49,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWVp4cWdnm5ws',
      },
      {
        collaborative: false,
        description: 'Descubra MC Paiva ZS e novos talentos brasileiros no horizonte.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTVE8ZCcLQ5Q',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTVE8ZCcLQ5Q',
        id: '37i9dQZF1DWTVE8ZCcLQ5Q',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000031b29beab1cfbff8fdc762942',
            width: null,
          },
        ],
        name: 'RADAR Brasil',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NTc3OTMxOCwwMDAwMDAwMGRlODUxMTZhMTU5NzY1Yzg4YWM3YjcyYTA1NTg4ODcw',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTVE8ZCcLQ5Q/tracks',
          total: 60,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWTVE8ZCcLQ5Q',
      },
      {
        collaborative: false,
        description: 'Thế hệ nghệ sĩ mới. Nếu sử dụng 📲, bấm ☉ phía trên ☝ để khám phá thêm về nghệ sĩ ảnh bìa Rhosy',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX0dUsjwqfaGM',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0dUsjwqfaGM',
        id: '37i9dQZF1DX0dUsjwqfaGM',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000035be0c417fdf02e2a10c8a858',
            width: null,
          },
        ],
        name: 'RADAR Vietnam',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NTcwODU3MSwwMDAwMDAwMDVjODkxYjkwMzQwZTMwZjMxNmY4MzQyOTdlZTkwZGQy',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0dUsjwqfaGM/tracks',
          total: 41,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX0dUsjwqfaGM',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX2P3E6UOxZyt',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX2P3E6UOxZyt',
        id: '37i9dQZF1DX2P3E6UOxZyt',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000032ff8f676f327e3072952d1d0',
            width: null,
          },
        ],
        name: 'RADAR 新勢力',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODA5NjAwMSwwMDAwMDAwMDAzNzg1MjQxOWNiZjc4YTg0NjRlOTJkODFmNTViM2My',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX2P3E6UOxZyt/tracks',
          total: 60,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX2P3E6UOxZyt',
      },
      {
        collaborative: false,
        description:
          '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4OR8pnFkwhR',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4OR8pnFkwhR',
        id: '37i9dQZF1DX4OR8pnFkwhR',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000033daae7031b725f4de5aa6296',
            width: null,
          },
        ],
        name: 'RADAR: Early Noise ',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODMzMzkzOSwwMDAwMDAwMDI0MjY0MjdkMjFhN2RjMjZhYzBhNzllNzFkMDczMzhi',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4OR8pnFkwhR/tracks',
          total: 50,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX4OR8pnFkwhR',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX6nghHfwjiMg',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX6nghHfwjiMg',
        id: '37i9dQZF1DX6nghHfwjiMg',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000003b1c79e76d7f2e916cea46b19',
            width: null,
          },
        ],
        name: 'Radar Al Sur',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2MjAwMTIwMSwwMDAwMDAwMDg1ZWJiOTY4MDhjMjRlYTdmOWIxOTllNmRmOTVkNWI1',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX6nghHfwjiMg/tracks',
          total: 70,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX6nghHfwjiMg',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWWNlI0CRgWup',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWNlI0CRgWup',
        id: '37i9dQZF1DWWNlI0CRgWup',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f0000000391be77f72412c133e4f59a2a',
            width: null,
          },
        ],
        name: 'RADAR FRANCE',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2Njk2MjQwNiwwMDAwMDAwMDE0YzU5NmM3YTZmMDkzOGEwN2FhNDJjZmE5Y2VmNmNk',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWNlI0CRgWup/tracks',
          total: 30,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWWNlI0CRgWup',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1aXwAOtpwvU',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1aXwAOtpwvU',
        id: '37i9dQZF1DX1aXwAOtpwvU',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000031dbf0a817bd4c05c0d70b5a0',
            width: null,
          },
        ],
        name: 'RADAR Polska',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2Mzk1Njg0MSwwMDAwMDAwMDAxYTg5NGVlYTA5MGQ3N2FhMGRlNzE3MTVhZDBkYjAz',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1aXwAOtpwvU/tracks',
          total: 45,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX1aXwAOtpwvU',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWYxUz0Ouugmb',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYxUz0Ouugmb',
        id: '37i9dQZF1DWYxUz0Ouugmb',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f0000000308a62f950d53413290570b2e',
            width: null,
          },
        ],
        name: 'RADAR Indonesia',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NTY4MDQwMSwwMDAwMDAwMDQ1YmEzNDM0OWEwNGQyOGU0MjZkM2MwNjlmN2RkNWQ1',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYxUz0Ouugmb/tracks',
          total: 43,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWYxUz0Ouugmb',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX5WmphwNfZfk',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX5WmphwNfZfk',
        id: '37i9dQZF1DX5WmphwNfZfk',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f0000000349fedf07ea6dfaf206e91477',
            width: null,
          },
        ],
        name: 'RADAR Canada',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODE3NDU1OCwwMDAwMDAwMGZmZmI3M2M1YzZlNmQzN2M5ZDI3NGJhNWRmMTQwOWJk',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX5WmphwNfZfk/tracks',
          total: 50,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX5WmphwNfZfk',
      },
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3Vl51vsat7a',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3Vl51vsat7a',
        id: '37i9dQZF1DX3Vl51vsat7a',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000037aa917f526c42e3dc66a9cde',
            width: null,
          },
        ],
        name: 'RADAR GSA',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NjkwODAwMSwwMDAwMDAwMDJmOGUxNzViNmNlZmI0NDMxOWFkOWZlZWRiNzg3M2Q0',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3Vl51vsat7a/tracks',
          total: 70,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX3Vl51vsat7a',
      },
      {
        collaborative: false,
        description: '發',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1OL0nzXOfhW',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1OL0nzXOfhW',
        id: '37i9dQZF1DX1OL0nzXOfhW',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000030fe7c63fa833d2387e7ad875',
            width: null,
          },
        ],
        name: 'RADAR HK',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2ODA5NjAwMSwwMDAwMDAwMGQ5NTMwZmE3YTliNTYxYmNhYTYzNTM3YjVhMzQ5YTY3',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1OL0nzXOfhW/tracks',
          total: 54,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX1OL0nzXOfhW',
      },
      {
        collaborative: false,
        description:
          'ที่สุดศิลปินรุ่นใหม่ขอARISARA, HYBS, Saran, SPRITE, Only Monday ',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4Q8j1DJOWem',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4Q8j1DJOWem',
        id: '37i9dQZF1DX4Q8j1DJOWem',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f0000000326693baf44bf6a41f230cf09',
            width: null,
          },
        ],
        name: 'RADAR Thailand',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2NTYwMDEwOSwwMDAwMDAwMGFmOGFkYWY3YzBjYjFlYzVkOGEwN2E5YzQ1MDg1ZWMz',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4Q8j1DJOWem/tracks',
          total: 45,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX4Q8j1DJOWem',
      },
      {
        collaborative: false,
        description: 'Scopri i tuoi nuovi artisti italiani preferiti! Cover: TOMMY DALI',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWVjDgOMO8jZl',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVjDgOMO8jZl',
        id: '37i9dQZF1DWVjDgOMO8jZl',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f000000035f923a5469741f654c16450a',
            width: null,
          },
        ],
        name: 'RADAR Italia',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id: 'MTY2Nzg2MjA2MSwwMDAwMDAwMDYwOWRkZTZhNmZlMTNiY2NhNTI1MGM2ZWZiMzIxMzcx',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVjDgOMO8jZl/tracks',
          total: 47,
      items: []

        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWVjDgOMO8jZl',
      },
    ],
    limit: 20,
    next: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFOOxftoKZxod/playlists?country=CO&offset=20&limit=20',
    offset: 0,
    previous: null,
    total: 45,
  },
};
