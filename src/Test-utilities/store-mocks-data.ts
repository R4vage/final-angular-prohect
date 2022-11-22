import { AuthState } from "src/app/auth/auth-store/reducers";
import { Playlist, PlaylistItem } from "src/app/core/models/playlist.models";
import { User } from "src/app/core/models/user-profile.models";
import { AlbumState } from "src/app/main-page/main-page-store/reducers/albums.reducer";
import { CategoryState } from "src/app/main-page/main-page-store/reducers/category.reducer";
import { PlaylistState } from "src/app/main-page/main-page-store/reducers/playlists.reducer";
import { SavedTrackState } from "src/app/my-music-page/store/reducers/saved-tracks.reducer";
import { TopUserAlbumsState } from "src/app/my-music-page/store/reducers/top-albums.reducer";
import { SavedState } from "src/app/saved-store/saved-item.reducer";
import { SearchState } from "src/app/search-page/search-store/search.reducer";
import { TrackState } from "src/app/track-detail-page/track-detail-store/reducers/tracks.reducer";
import { TopUserArtistState } from "src/app/user-profile/user-profile-store/reducers/top-artists.reducer";
import { albumWithTracksMockData } from "./album-mock-data";
import { artistMockData } from "./artists-mock-data";
import { trackMockData } from "./track-mock-data";

export const mockAlbumStore: AlbumState = {
  ids: [
    'testParamsAlbum',
    '1WFoW8tiwae16JkMdQWvH3',
    '0yTm9bRv0Ui1Q0iZoLqAWH',
    '5PTaRgWmvUnOUhOx800hB9',
    '4PR6koe67C7YosjAYriYh4',
    '5MS3MvWHJ3lOZPLiMxzOU6',
    '7c2v5ycSRINlH2yIi3oV85',
    '39X3Jhsy9oT9XzgoUDs5P9',
    '1tDPYZoGKYQPyo6qcm7yWU',
    '3oS6bRaKUrgQ71Z65qp6uK',
    '6ywjX40yQQT3EVSuv0JcmV',
    '3uROJaWfcDjawQ2Bo5DoCj',
    '1O0VHFd6xTl1CfLausE0kN',
    '5wElk4V6mpataJOwrjLsj1',
    '3pfyjuT8pPM0i9K3i7n451',
    '4Lj0WgYY0R8DLHM6v2jVr1',
    '3Zzv75PyROH6AMeXN1Yr1h',
    '6U2Ncrmi1EeBQQz2NNgh1M',
    '1IZF5Dv3NXSwZPifWMOsIT',
    '0KJc9ksnoJJsdpQxV3z5i1',
  ],
  entities: {
    'testParamsAlbum': albumWithTracksMockData,
    '1WFoW8tiwae16JkMdQWvH3': {
      album_type: 'single',
      artists: artistMockData,
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/1WFoW8tiwae16JkMdQWvH3',
      },
      href: 'https://api.spotify.com/v1/albums/1WFoW8tiwae16JkMdQWvH3',
      id: '1WFoW8tiwae16JkMdQWvH3',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273b27f643b59cf605c641074c3',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02b27f643b59cf605c641074c3',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851b27f643b59cf605c641074c3',
          width: 64,
        },
      ],
      name: 'pa quererte',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:1WFoW8tiwae16JkMdQWvH3',
    },
    '0yTm9bRv0Ui1Q0iZoLqAWH': {
      album_type: 'single',
      artists: artistMockData,
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0yTm9bRv0Ui1Q0iZoLqAWH',
      },
      href: 'https://api.spotify.com/v1/albums/0yTm9bRv0Ui1Q0iZoLqAWH',
      id: '0yTm9bRv0Ui1Q0iZoLqAWH',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2731db81eaf15a164e2f6899b8f',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e021db81eaf15a164e2f6899b8f',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048511db81eaf15a164e2f6899b8f',
          width: 64,
        },
      ],
      name: 'Ya No Sos Igual',
      release_date: '2022-11-02',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:0yTm9bRv0Ui1Q0iZoLqAWH',
    },
    '5PTaRgWmvUnOUhOx800hB9': {
      album_type: 'single',
      artists: artistMockData,
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/5PTaRgWmvUnOUhOx800hB9',
      },
      href: 'https://api.spotify.com/v1/albums/5PTaRgWmvUnOUhOx800hB9',
      id: '5PTaRgWmvUnOUhOx800hB9',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273180a8feb35de09ecff755469',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02180a8feb35de09ecff755469',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851180a8feb35de09ecff755469',
          width: 64,
        },
      ],
      name: 'eclips3',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 6,
      type: 'album',
      uri: 'spotify:album:5PTaRgWmvUnOUhOx800hB9',
    },
    '4PR6koe67C7YosjAYriYh4': {
      album_type: 'album',
      artists: artistMockData,
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
    '5MS3MvWHJ3lOZPLiMxzOU6': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
          },
          href: 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4',
          id: '3TVXtAsR1Inumwj472S9r4',
          name: 'Drake',
          type: 'artist',
          uri: 'spotify:artist:3TVXtAsR1Inumwj472S9r4',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft',
          },
          href: 'https://api.spotify.com/v1/artists/1URnnhqYAYcrqrcwql10ft',
          id: '1URnnhqYAYcrqrcwql10ft',
          name: '21 Savage',
          type: 'artist',
          uri: 'spotify:artist:1URnnhqYAYcrqrcwql10ft',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/5MS3MvWHJ3lOZPLiMxzOU6',
      },
      href: 'https://api.spotify.com/v1/albums/5MS3MvWHJ3lOZPLiMxzOU6',
      id: '5MS3MvWHJ3lOZPLiMxzOU6',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0202854a7060fccc1a66a4b5ad',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad',
          width: 64,
        },
      ],
      name: 'Her Loss',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 16,
      type: 'album',
      uri: 'spotify:album:5MS3MvWHJ3lOZPLiMxzOU6',
    },
    '7c2v5ycSRINlH2yIi3oV85': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2wMN1UAgISJA8yQusQL18G',
          },
          href: 'https://api.spotify.com/v1/artists/2wMN1UAgISJA8yQusQL18G',
          id: '2wMN1UAgISJA8yQusQL18G',
          name: 'Silvina Moreno',
          type: 'artist',
          uri: 'spotify:artist:2wMN1UAgISJA8yQusQL18G',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/7c2v5ycSRINlH2yIi3oV85',
      },
      href: 'https://api.spotify.com/v1/albums/7c2v5ycSRINlH2yIi3oV85',
      id: '7c2v5ycSRINlH2yIi3oV85',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2738fe09fb7f5e9b2ab8d2ceb60',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e028fe09fb7f5e9b2ab8d2ceb60',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048518fe09fb7f5e9b2ab8d2ceb60',
          width: 64,
        },
      ],
      name: 'Selva',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:7c2v5ycSRINlH2yIi3oV85',
    },
    '39X3Jhsy9oT9XzgoUDs5P9': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1cj1ov4uZ0Htsx9PWDpNvi',
          },
          href: 'https://api.spotify.com/v1/artists/1cj1ov4uZ0Htsx9PWDpNvi',
          id: '1cj1ov4uZ0Htsx9PWDpNvi',
          name: 'El Zar',
          type: 'artist',
          uri: 'spotify:artist:1cj1ov4uZ0Htsx9PWDpNvi',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/39X3Jhsy9oT9XzgoUDs5P9',
      },
      href: 'https://api.spotify.com/v1/albums/39X3Jhsy9oT9XzgoUDs5P9',
      id: '39X3Jhsy9oT9XzgoUDs5P9',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273d55bc53daf6f06244ed01e9d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02d55bc53daf6f06244ed01e9d',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851d55bc53daf6f06244ed01e9d',
          width: 64,
        },
      ],
      name: 'RIO HOTEL',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 11,
      type: 'album',
      uri: 'spotify:album:39X3Jhsy9oT9XzgoUDs5P9',
    },
    '1tDPYZoGKYQPyo6qcm7yWU': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5EQuMf3chH4yv7UPEiVIxx',
          },
          href: 'https://api.spotify.com/v1/artists/5EQuMf3chH4yv7UPEiVIxx',
          id: '5EQuMf3chH4yv7UPEiVIxx',
          name: 'Campedrinos',
          type: 'artist',
          uri: 'spotify:artist:5EQuMf3chH4yv7UPEiVIxx',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/1tDPYZoGKYQPyo6qcm7yWU',
      },
      href: 'https://api.spotify.com/v1/albums/1tDPYZoGKYQPyo6qcm7yWU',
      id: '1tDPYZoGKYQPyo6qcm7yWU',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273d3eff5672265c71da1c4c31d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02d3eff5672265c71da1c4c31d',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851d3eff5672265c71da1c4c31d',
          width: 64,
        },
      ],
      name: 'La Noche Perfecta',
      release_date: '2022-11-03',
      release_date_precision: 'day',
      total_tracks: 12,
      type: 'album',
      uri: 'spotify:album:1tDPYZoGKYQPyo6qcm7yWU',
    },
    '3oS6bRaKUrgQ71Z65qp6uK': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/09uLTF7iK7cR3WsyhGJCoQ',
          },
          href: 'https://api.spotify.com/v1/artists/09uLTF7iK7cR3WsyhGJCoQ',
          id: '09uLTF7iK7cR3WsyhGJCoQ',
          name: 'Casandra Paz',
          type: 'artist',
          uri: 'spotify:artist:09uLTF7iK7cR3WsyhGJCoQ',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3oS6bRaKUrgQ71Z65qp6uK',
      },
      href: 'https://api.spotify.com/v1/albums/3oS6bRaKUrgQ71Z65qp6uK',
      id: '3oS6bRaKUrgQ71Z65qp6uK',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273093d9885c0ef6673ead37521',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02093d9885c0ef6673ead37521',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851093d9885c0ef6673ead37521',
          width: 64,
        },
      ],
      name: 'Casinaranja',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 9,
      type: 'album',
      uri: 'spotify:album:3oS6bRaKUrgQ71Z65qp6uK',
    },
    '6ywjX40yQQT3EVSuv0JcmV': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5fNV5ubt46GqUpyP7Mh4Ln',
          },
          href: 'https://api.spotify.com/v1/artists/5fNV5ubt46GqUpyP7Mh4Ln',
          id: '5fNV5ubt46GqUpyP7Mh4Ln',
          name: 'Shirel',
          type: 'artist',
          uri: 'spotify:artist:5fNV5ubt46GqUpyP7Mh4Ln',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6ywjX40yQQT3EVSuv0JcmV',
      },
      href: 'https://api.spotify.com/v1/albums/6ywjX40yQQT3EVSuv0JcmV',
      id: '6ywjX40yQQT3EVSuv0JcmV',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27301d6396e8b5d8a438f6bf00d',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0201d6396e8b5d8a438f6bf00d',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485101d6396e8b5d8a438f6bf00d',
          width: 64,
        },
      ],
      name: 'Libre Albedrío',
      release_date: '2022-11-03',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:6ywjX40yQQT3EVSuv0JcmV',
    },
    '3uROJaWfcDjawQ2Bo5DoCj': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5AQlQBU9LCmQwReukeom2I',
          },
          href: 'https://api.spotify.com/v1/artists/5AQlQBU9LCmQwReukeom2I',
          id: '5AQlQBU9LCmQwReukeom2I',
          name: 'Juanse',
          type: 'artist',
          uri: 'spotify:artist:5AQlQBU9LCmQwReukeom2I',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3uROJaWfcDjawQ2Bo5DoCj',
      },
      href: 'https://api.spotify.com/v1/albums/3uROJaWfcDjawQ2Bo5DoCj',
      id: '3uROJaWfcDjawQ2Bo5DoCj',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2738a8f02478b3e2930f5fd6d7f',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e028a8f02478b3e2930f5fd6d7f',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048518a8f02478b3e2930f5fd6d7f',
          width: 64,
        },
      ],
      name: 'Effatá',
      release_date: '2022-11-04',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:3uROJaWfcDjawQ2Bo5DoCj',
    },
    '1O0VHFd6xTl1CfLausE0kN': {
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
    '5wElk4V6mpataJOwrjLsj1': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1Yj5Xey7kTwvZla8sqdsdE',
          },
          href: 'https://api.spotify.com/v1/artists/1Yj5Xey7kTwvZla8sqdsdE',
          id: '1Yj5Xey7kTwvZla8sqdsdE',
          name: 'Cris Mj',
          type: 'artist',
          uri: 'spotify:artist:1Yj5Xey7kTwvZla8sqdsdE',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1',
          },
          href: 'https://api.spotify.com/v1/artists/5Y3MV9DZ0d87NnVm56qSY1',
          id: '5Y3MV9DZ0d87NnVm56qSY1',
          name: 'Tiago PZK',
          type: 'artist',
          uri: 'spotify:artist:5Y3MV9DZ0d87NnVm56qSY1',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/5wElk4V6mpataJOwrjLsj1',
      },
      href: 'https://api.spotify.com/v1/albums/5wElk4V6mpataJOwrjLsj1',
      id: '5wElk4V6mpataJOwrjLsj1',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2736dfcfb6586341d812f511716',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e026dfcfb6586341d812f511716',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048516dfcfb6586341d812f511716',
          width: 64,
        },
      ],
      name: 'Fiera',
      release_date: '2022-10-27',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5wElk4V6mpataJOwrjLsj1',
    },
    '3pfyjuT8pPM0i9K3i7n451': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B',
          },
          href: 'https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B',
          id: '0tmwSHipWxN12fsoLcFU3B',
          name: 'Manuel Turizo',
          type: 'artist',
          uri: 'spotify:artist:0tmwSHipWxN12fsoLcFU3B',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG',
          },
          href: 'https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG',
          id: '1DxLCyH42yaHKGK3cl5bvG',
          name: 'Maria Becerra',
          type: 'artist',
          uri: 'spotify:artist:1DxLCyH42yaHKGK3cl5bvG',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3pfyjuT8pPM0i9K3i7n451',
      },
      href: 'https://api.spotify.com/v1/albums/3pfyjuT8pPM0i9K3i7n451',
      id: '3pfyjuT8pPM0i9K3i7n451',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273e21457c85d2349bbced9d710',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02e21457c85d2349bbced9d710',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851e21457c85d2349bbced9d710',
          width: 64,
        },
      ],
      name: 'Éxtasis',
      release_date: '2022-10-27',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3pfyjuT8pPM0i9K3i7n451',
    },
    '4Lj0WgYY0R8DLHM6v2jVr1': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1SiLK8gdECx2iEm2SSj0Bl',
          },
          href: 'https://api.spotify.com/v1/artists/1SiLK8gdECx2iEm2SSj0Bl',
          id: '1SiLK8gdECx2iEm2SSj0Bl',
          name: 'Ak4:20',
          type: 'artist',
          uri: 'spotify:artist:1SiLK8gdECx2iEm2SSj0Bl',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/4Lj0WgYY0R8DLHM6v2jVr1',
      },
      href: 'https://api.spotify.com/v1/albums/4Lj0WgYY0R8DLHM6v2jVr1',
      id: '4Lj0WgYY0R8DLHM6v2jVr1',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273c6e3d3b0383a6c9a9e18390e',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02c6e3d3b0383a6c9a9e18390e',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851c6e3d3b0383a6c9a9e18390e',
          width: 64,
        },
      ],
      name: 'RELAX CON MAX - Spotify Singles',
      release_date: '2022-10-27',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:4Lj0WgYY0R8DLHM6v2jVr1',
    },
    '3Zzv75PyROH6AMeXN1Yr1h': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H',
          },
          href: 'https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H',
          id: '5pKCCKE2ajJHZ9KAiaK11H',
          name: 'Rihanna',
          type: 'artist',
          uri: 'spotify:artist:5pKCCKE2ajJHZ9KAiaK11H',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3Zzv75PyROH6AMeXN1Yr1h',
      },
      href: 'https://api.spotify.com/v1/albums/3Zzv75PyROH6AMeXN1Yr1h',
      id: '3Zzv75PyROH6AMeXN1Yr1h',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a790c56cff6e3463bf9935cb',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a790c56cff6e3463bf9935cb',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a790c56cff6e3463bf9935cb',
          width: 64,
        },
      ],
      name: 'Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)',
      release_date: '2022-10-28',
      release_date_precision: 'day',
      total_tracks: 2,
      type: 'album',
      uri: 'spotify:album:3Zzv75PyROH6AMeXN1Yr1h',
    },
    '6U2Ncrmi1EeBQQz2NNgh1M': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4bw2Am3p9ji3mYsXNXtQcd',
          },
          href: 'https://api.spotify.com/v1/artists/4bw2Am3p9ji3mYsXNXtQcd',
          id: '4bw2Am3p9ji3mYsXNXtQcd',
          name: 'Piso 21',
          type: 'artist',
          uri: 'spotify:artist:4bw2Am3p9ji3mYsXNXtQcd',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6U2Ncrmi1EeBQQz2NNgh1M',
      },
      href: 'https://api.spotify.com/v1/albums/6U2Ncrmi1EeBQQz2NNgh1M',
      id: '6U2Ncrmi1EeBQQz2NNgh1M',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273d7079d75e4e0c3959ca46e23',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02d7079d75e4e0c3959ca46e23',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851d7079d75e4e0c3959ca46e23',
          width: 64,
        },
      ],
      name: '777',
      release_date: '2022-10-13',
      release_date_precision: 'day',
      total_tracks: 16,
      type: 'album',
      uri: 'spotify:album:6U2Ncrmi1EeBQQz2NNgh1M',
    },
    '1IZF5Dv3NXSwZPifWMOsIT': {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d',
          },
          href: 'https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d',
          id: '1dfeR4HaWDbWqFHLkxsg1d',
          name: 'Queen',
          type: 'artist',
          uri: 'spotify:artist:1dfeR4HaWDbWqFHLkxsg1d',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/1IZF5Dv3NXSwZPifWMOsIT',
      },
      href: 'https://api.spotify.com/v1/albums/1IZF5Dv3NXSwZPifWMOsIT',
      id: '1IZF5Dv3NXSwZPifWMOsIT',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273cb10205a4fa125e620bb02e9',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02cb10205a4fa125e620bb02e9',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851cb10205a4fa125e620bb02e9',
          width: 64,
        },
      ],
      name: 'Face It Alone',
      release_date: '2022-10-13',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:1IZF5Dv3NXSwZPifWMOsIT',
    },
    '0KJc9ksnoJJsdpQxV3z5i1': {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5',
          },
          href: 'https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5',
          id: '0L8ExT028jH3ddEcZwqJJ5',
          name: 'Red Hot Chili Peppers',
          type: 'artist',
          uri: 'spotify:artist:0L8ExT028jH3ddEcZwqJJ5',
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0KJc9ksnoJJsdpQxV3z5i1',
      },
      href: 'https://api.spotify.com/v1/albums/0KJc9ksnoJJsdpQxV3z5i1',
      id: '0KJc9ksnoJJsdpQxV3z5i1',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273aa50644f05f26e73ba950b8c',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02aa50644f05f26e73ba950b8c',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851aa50644f05f26e73ba950b8c',
          width: 64,
        },
      ],
      name: 'Return of the Dream Canteen',
      release_date: '2022-10-14',
      release_date_precision: 'day',
      total_tracks: 17,
      type: 'album',
      uri: 'spotify:album:0KJc9ksnoJJsdpQxV3z5i1',
    },
  },
  allAlbumsLoaded: true,
};

export const authStoreMock: AuthState = {
  access_token:
    'BQA3E0r6qU387UGiNQnRNpvkC04S-LIiphaYpFRjHSc_0Yga1qUt49z2e_BzEVCOQqPM9aDbbgUQ8HyeD1dptUyvZbDNOFGUHsNK6GL6yskLOoiMIxVC_LV0X0So-0qWflM2EXG9Sm9gnBi3ik0HBWMjUW5mF8ni0WGQK2pn6TZezCaI53GzucPKeyi7fcgplZA_3ERFiqKkiirMN63Goo_v8Ks-Md8Yder_jth-nP1_VK9DiQxPnoJrMxnwy3lEdZOc2ogzyWocY86QpfiIaHsknxDsk5Vj3A3SFV3oGSOGGCLSiTjYzCF_4U1j1-DgrZ6G6Xc',
  token_type: 'Bearer',
  expire_in: 3600,
  refresh_token:
    'AQAVzbqTJDJpJBiJ9ghAJIJZtmCojQaes73c-Ev0wWeGfFKwNo9MseGPVB07XTNcCwhc1GXOOH65Qax7bWLx7jCSoc6VTIC4ec2QNVcxonibh6I3N9dAF1TRj77lWTNHa0-D6Q',
  scope:
    'playlist-read-private playlist-read-collaborative user-follow-read playlist-modify-private user-read-email user-read-private user-follow-modify user-modify-playback-state user-library-read user-library-modify playlist-modify-public user-read-playback-state user-read-currently-playing user-top-read',
};

export const categoriesStoreMock: CategoryState = {
  ids: [
    'toplists',
    '0JQ5DAqbMKFxXaXKP7zcDp',
    '0JQ5DAqbMKFEC4WFtoNRpw',
    '0JQ5DAqbMKFDXXwE9BDJAr',
    '0JQ5DAqbMKFQ00XGBls6ym',
    '0JQ5DAqbMKFF1br7dZcRtK',
    '0JQ5DAqbMKFOOxftoKZxod',
    'in_the_car',
    '0JQ5DAqbMKFLb2EqgLtpjC',
    '0JQ5DAqbMKFHOzuVTgTizF',
    '0JQ5DAqbMKFzHmL4tf05da',
    '0JQ5DAqbMKFFzDl7qN9Apr',
    '0JQ5DAqbMKFPw634sFwguI',
    '0JQ5DAqbMKFx0uLQR2okcc',
    '0JQ5DAqbMKFCWjUTdzaG0e',
    '0JQ5DAqbMKFQIL0AXnG5AK',
    '0JQ5DAqbMKFAXlCG6QvYQ4',
    '0JQ5DAqbMKFy78wprEpAjl',
    '0JQ5DAqbMKFIVNxQgRNSg0',
    '0JQ5DAqbMKFCfObibaOZbv',
  ],
  entities: {
    toplists: {
      href: 'https://api.spotify.com/v1/browse/categories/toplists',
      icons: [
        {
          height: 275,
          url: 'https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg',
          width: 275,
        },
      ],
      id: 'toplists',
      name: 'Top Lists',
    },
    '0JQ5DAqbMKFxXaXKP7zcDp': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFxXaXKP7zcDp',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/26a60378-a374-4cd7-b894-28efa5e154cb.jpg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFxXaXKP7zcDp',
      name: 'Latin',
    },
    '0JQ5DAqbMKFEC4WFtoNRpw': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFEC4WFtoNRpw',
      name: 'Pop',
    },
    '0JQ5DAqbMKFDXXwE9BDJAr': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFDXXwE9BDJAr',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFDXXwE9BDJAr',
      name: 'Rock',
    },
    '0JQ5DAqbMKFQ00XGBls6ym': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFQ00XGBls6ym',
      name: 'Hip-Hop',
    },
    '0JQ5DAqbMKFF1br7dZcRtK': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFF1br7dZcRtK',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/c5495b9f0f694ffcb39c9217d4ed4375',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFF1br7dZcRtK',
      name: 'Pride',
    },
    '0JQ5DAqbMKFOOxftoKZxod': {
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
    in_the_car: {
      href: 'https://api.spotify.com/v1/browse/categories/in_the_car',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/57017d435c344bb28efba325b7c9e7c6.jpeg',
          width: null,
        },
      ],
      id: 'in_the_car',
      name: 'In the car',
    },
    '0JQ5DAqbMKFLb2EqgLtpjC': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLb2EqgLtpjC',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFLb2EqgLtpjC',
      name: 'Wellness',
    },
    '0JQ5DAqbMKFHOzuVTgTizF': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFHOzuVTgTizF',
      name: 'Dance/Electronic',
    },
    '0JQ5DAqbMKFzHmL4tf05da': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFzHmL4tf05da',
      name: 'Mood',
    },
    '0JQ5DAqbMKFFzDl7qN9Apr': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFFzDl7qN9Apr',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFFzDl7qN9Apr',
      name: 'Chill',
    },
    '0JQ5DAqbMKFPw634sFwguI': {
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
    '0JQ5DAqbMKFx0uLQR2okcc': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFx0uLQR2okcc',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/04da469dd7be4dab96659aa1fa9f0ac9.jpeg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFx0uLQR2okcc',
      name: 'At Home',
    },
    '0JQ5DAqbMKFCWjUTdzaG0e': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCWjUTdzaG0e',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFCWjUTdzaG0e',
      name: 'Indie',
    },
    '0JQ5DAqbMKFQIL0AXnG5AK': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: '0JQ5DAqbMKFQIL0AXnG5AK',
      name: 'Trending',
    },
    '0JQ5DAqbMKFAXlCG6QvYQ4': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/media/links/workout-274x274.jpg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFAXlCG6QvYQ4',
      name: 'Workout',
    },
    '0JQ5DAqbMKFy78wprEpAjl': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFy78wprEpAjl',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/7fe0f2c9c91f45a3b6bae49d298201a4.jpeg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFy78wprEpAjl',
      name: 'Folk & Acoustic',
    },
    '0JQ5DAqbMKFIVNxQgRNSg0': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFIVNxQgRNSg0',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFIVNxQgRNSg0',
      name: 'Decades',
    },
    '0JQ5DAqbMKFCfObibaOZbv': {
      href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCfObibaOZbv',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/0d39395309ba47838ef12ce987f19d16.jpeg',
          width: null,
        },
      ],
      id: '0JQ5DAqbMKFCfObibaOZbv',
      name: 'Gaming',
    },
  },
  allCategoriesLoaded: true,
};

export const playlistMockItem:Playlist =   {
  collaborative: false,
  description: 'Hacele honor al domingo y terminalo bien arriba.',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWU4vz8xTaZmg',
  },
  href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWU4vz8xTaZmg',
  id: '37i9dQZF1DWU4vz8xTaZmg',
  images: [
    {
      height: null,
      url: 'https://i.scdn.co/image/ab67706f0000000362f7474946003f05ec59b230',
      width: null,
    },
  ],
  name: 'Antidomingo',
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
  snapshot_id:
    'MTY2ODE4NDM3NiwwMDAwMDAwMGFjZWU2MTI2ODVmY2NkYWFiNjlmM2I3NGNmYTM3ZGE2',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWU4vz8xTaZmg/tracks',
    total: 100,
    items: [
      {
        added_at: new Date(131),
        added_by: {external_urls:{spotify:''}, href:'', id:'mock', type:'', uri:'asd'},
        is_local:true,
        primary_color:null,
        video_thumbnail:{url:null},
        track:trackMockData
    }
    ]
  },
  followers:{
    href:null,
    total:2
  },
  type: 'playlist',
  uri: 'spotify:playlist:37i9dQZF1DWU4vz8xTaZmg',
}

export const playlistsMockStore:PlaylistState = {
  ids: [
    'testParamsPlaylist',
    '37i9dQZF1DX3iWJN79KKoY',
    '37i9dQZF1DWZU4CGLgiKls',
    '37i9dQZF1DX20S3TU4dlyR',
    '37i9dQZF1DX07WFtTaTMxP',
    '37i9dQZF1DX1mdFJSflVUV',
    '37i9dQZF1DXbTxeAdrVG2l',
    '37i9dQZF1DWUSRkJxO1RgW',
    '37i9dQZF1DXdxcBWuJkbcy',
    '37i9dQZF1DWVtFO27AQ6dF',
  ],
  entities: {
    'testParamsPlaylist': playlistMockItem,
    '37i9dQZF1DX3iWJN79KKoY': {
      collaborative: false,
      description: 'Un momento de relax, junto a melodías familiares.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3iWJN79KKoY',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3iWJN79KKoY',
      id: '37i9dQZF1DX3iWJN79KKoY',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000030fc68a8587238c2ada4fbe6d',
          width: null,
        },
      ],
      name: 'Chill Out Covers',
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
      snapshot_id:
        'MTY1NzA0NTg0NSwwMDAwMDAwMDY3MWJmY2EwNjdiMGEwYjI2ZmMwZmIxMjczMTYwNjBh',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3iWJN79KKoY/tracks',
        total: 120,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX3iWJN79KKoY',
    },
    '37i9dQZF1DWZU4CGLgiKls': {
      collaborative: false,
      description: 'Entre tragos y música, se empieza a palpitar el partido.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWZU4CGLgiKls',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZU4CGLgiKls',
      id: '37i9dQZF1DWZU4CGLgiKls',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f0000000387c06a6a9ca202311f89363c',
          width: null,
        },
      ],
      name: 'Previa Futbolera',
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
      snapshot_id:
        'MTY2NzkyODkyOSwwMDAwMDAwMDRmMzc4MzRhNTRjZjU5ZWMwMTI4NzdlYjIwZDY2MDAz',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZU4CGLgiKls/tracks',
        total: 65,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWZU4CGLgiKls',
    },
    '37i9dQZF1DX20S3TU4dlyR': {
      collaborative: false,
      description:
        'Este es el Reggae, al sur del continente americano. Foto: Los Pericos.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX20S3TU4dlyR',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX20S3TU4dlyR',
      id: '37i9dQZF1DX20S3TU4dlyR',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003763f2af509e585087b296c12',
          width: null,
        },
      ],
      name: 'Reggae Al Sur',
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
      snapshot_id:
        'MTY2NDU0OTgzNCwwMDAwMDAwMDc4YTY5NzcxNzlkMDdlMTNjYjJhZDdkNTJiMWQwYzQy',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX20S3TU4dlyR/tracks',
        total: 89,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX20S3TU4dlyR',
    },
    '37i9dQZF1DX07WFtTaTMxP': {
      collaborative: false,
      description:
        'Un merecido momento de relajación para el fin de la jornada.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX07WFtTaTMxP',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX07WFtTaTMxP',
      id: '37i9dQZF1DX07WFtTaTMxP',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003a784f0ee833d62fa42572047',
          width: null,
        },
      ],
      name: 'Hora del Drink',
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
      snapshot_id:
        'MTY2Njk2MTg0MCwwMDAwMDAwMDQ1MjljMTU5MDNjYTQ1ODNmY2YwODkyYjNjOTIwN2U4',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX07WFtTaTMxP/tracks',
        total: 200,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX07WFtTaTMxP',
    },
    '37i9dQZF1DX1mdFJSflVUV': {
      collaborative: false,
      description: 'Canciones para subirse al auto y cantar sin parar.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1mdFJSflVUV',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1mdFJSflVUV',
      id: '37i9dQZF1DX1mdFJSflVUV',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f0000000313d895aca42b92fb3faa404f',
          width: null,
        },
      ],
      name: 'Canta en el auto',
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
      snapshot_id:
        'MTY2NjkyNjAwMSwwMDAwMDAwMDBlN2FhZjdkMTgzNzBjNWRhYmY5ZGVmNGRiOThhMWE4',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1mdFJSflVUV/tracks',
        total: 100,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX1mdFJSflVUV',
    },
    '37i9dQZF1DXbTxeAdrVG2l': {
      collaborative: false,
      description: 'The biggest songs of the 1990s. ',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l',
      id: '37i9dQZF1DXbTxeAdrVG2l',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000036b5da1f18305a872364f558a',
          width: null,
        },
      ],
      name: 'All Out 90s',
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
      snapshot_id:
        'MTY2ODEyNDgwMSwwMDAwMDAwMDkxNGRmODEyZWYwOTg3MGM2YTVjNThkMTY3MWYxM2Ux',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l/tracks',
        total: 150,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DXbTxeAdrVG2l',
    },
    '37i9dQZF1DWUSRkJxO1RgW': {
      collaborative: false,
      description: 'Canciones que marcaron la década de los 80s en Argentina.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWUSRkJxO1RgW',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUSRkJxO1RgW',
      id: '37i9dQZF1DWUSRkJxO1RgW',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000031f34dc61cd67cb28bc5a75b0',
          width: null,
        },
      ],
      name: 'Los 80 Argentina',
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
      snapshot_id:
        'MTYxNzA0MjgxNCwwMDAwMDAwMDJiZjYxMWQ1OTYwNTA3YjJjMGY2YmJkYzAzNGQ4ZTYw',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUSRkJxO1RgW/tracks',
        total: 60,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWUSRkJxO1RgW',
    },
    '37i9dQZF1DXdxcBWuJkbcy': {
      collaborative: false,
      description:
        'Uplifting and energetic music that helps you stay motivated.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdxcBWuJkbcy',
      id: '37i9dQZF1DXdxcBWuJkbcy',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000035f2635e031078672e7b384a5',
          width: null,
        },
      ],
      name: 'Motivation Mix',
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
      snapshot_id:
        'MTY2ODcyNjA2MSwwMDAwMDAwMGU1NzA4MzZjZTBhNjllMzRmMjdjYTRhNzg2OGMyYmJm',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdxcBWuJkbcy/tracks',
        total: 100,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DXdxcBWuJkbcy',
    },
    '37i9dQZF1DWVtFO27AQ6dF': {
      collaborative: false,
      description:
        'Música motivacional para quemar esa hamburguesa que comiste el finde.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWVtFO27AQ6dF',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVtFO27AQ6dF',
      id: '37i9dQZF1DWVtFO27AQ6dF',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000032da1147f4b3d584af15002a8',
          width: null,
        },
      ],
      name: 'Maldita Hamburguesa',
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
      snapshot_id:
        'MTY1NzA0NTM3MCwwMDAwMDAwMDg1ZGY4MjM2NjAxMjhhOWFhMzhhOTcwYzMyMmFlNDYz',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVtFO27AQ6dF/tracks',
        total: 60,
        items: []

      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWVtFO27AQ6dF',
    },
  },
  allPlaylistsLoaded: true,
};

export const savedItemsMockStore:SavedState = {
  ids: [
    'testParamsPlaylist',
    'testParamsAlbum',
    'testParamsTrack',
    '5PTaRgWmvUnOUhOx800hB9',
    '4PR6koe67C7YosjAYriYh4',
    '5MS3MvWHJ3lOZPLiMxzOU6',
    '7c2v5ycSRINlH2yIi3oV85',
    '39X3Jhsy9oT9XzgoUDs5P9',
    '1tDPYZoGKYQPyo6qcm7yWU',
    '3oS6bRaKUrgQ71Z65qp6uK',
    '6ywjX40yQQT3EVSuv0JcmV',
    '3uROJaWfcDjawQ2Bo5DoCj',
    '1O0VHFd6xTl1CfLausE0kN',
    '5wElk4V6mpataJOwrjLsj1',
    '3pfyjuT8pPM0i9K3i7n451',
    '4Lj0WgYY0R8DLHM6v2jVr1',
    '3Zzv75PyROH6AMeXN1Yr1h',
    '6U2Ncrmi1EeBQQz2NNgh1M',
    '1IZF5Dv3NXSwZPifWMOsIT',
    '0KJc9ksnoJJsdpQxV3z5i1',
    '7abALHPvL5mIbokvxsAAhH',
    '4ui50OJgj4Zbrkpzo1gpsA',
    '7yCXgxWLZZEAiVsISKN3BF',
    '3ZliRX2QN3JCRLC8aX41mO',
    '3IbXbDy1F1XAtriMtcvLWe',
    '0jgWVVvhT0tbpzFIr73p3f',
    '280hU6Lrftj2KAayzIzROw',
    '6kZ42qRrzov54LcAk4onW9',
    '6DEjYFkNZh67HP7R9PSZvv',
    '4TYdsEDcCdsnWlFxbBjBfr',
    '6xqlgBccdlxUh5DeJSx2ho',
    '1FY8kqUQKHwjibwLbp5cey',
    '0L8ExT028jH3ddEcZwqJJ5',
    '3zunDAtRDg7kflREzWAhxl',
    '0jWGiEfSygYEYbd423XARv',
    '2IMZYfNi21MGqxopj9fWx8',
    '4IG1SDlwgNKzqTmjBrvY3K',
    '2nu6ZVLgiNcRcWgDKUjplH',
    '5kxnZh8gXyXdIvCWbDMevT',
    '4pwqNyMSvuv7VOhQBdjB6Q',
    '4vVTI94F9uJ8lHNDWKv0i2',
    '0bVtevEgtDIeRjCJbK3Lmv',
    '1lCRw5FEZ1gPDNPzy1K4zW',
    '5mKfu81dldQ1hjQHy2Wd0A',
    '4twiNeOoPDbCFwd7bmu5Yo',
    '5Y6nVaayzitvsD5F7nr3DV',
    '7Ay4yWljTJJ21P3SSHiSeF',
    '0jSNNpw6E8lYvQ3Vg6FJiA',
    '004GpAiyGM5V1JPlN1g0W8',
    '2KvEczLenybvsyHx7URzos',
  ],
  entities: {
    'testParamsPlaylist': {
      id: 'testParamsPlaylist',
      isSaved: false,
      kind: 'playlist',
    },
    'testParamsAlbum': {
      id: 'testParamsAlbum',
      isSaved: false,
      kind: 'album',
    },
    'testParamsTrack': {
      id: 'testParamsTrack',
      isSaved: false,
      kind: 'track',
    },
    '5PTaRgWmvUnOUhOx800hB9': {
      id: '5PTaRgWmvUnOUhOx800hB9',
      isSaved: false,
      kind: 'album',
    },
    '4PR6koe67C7YosjAYriYh4': {
      id: '4PR6koe67C7YosjAYriYh4',
      isSaved: false,
      kind: 'album',
    },
    '5MS3MvWHJ3lOZPLiMxzOU6': {
      id: '5MS3MvWHJ3lOZPLiMxzOU6',
      isSaved: false,
      kind: 'album',
    },
    '7c2v5ycSRINlH2yIi3oV85': {
      id: '7c2v5ycSRINlH2yIi3oV85',
      isSaved: false,
      kind: 'album',
    },
    '39X3Jhsy9oT9XzgoUDs5P9': {
      id: '39X3Jhsy9oT9XzgoUDs5P9',
      isSaved: false,
      kind: 'album',
    },
    '1tDPYZoGKYQPyo6qcm7yWU': {
      id: '1tDPYZoGKYQPyo6qcm7yWU',
      isSaved: false,
      kind: 'album',
    },
    '3oS6bRaKUrgQ71Z65qp6uK': {
      id: '3oS6bRaKUrgQ71Z65qp6uK',
      isSaved: false,
      kind: 'album',
    },
    '6ywjX40yQQT3EVSuv0JcmV': {
      id: '6ywjX40yQQT3EVSuv0JcmV',
      isSaved: false,
      kind: 'album',
    },
    '3uROJaWfcDjawQ2Bo5DoCj': {
      id: '3uROJaWfcDjawQ2Bo5DoCj',
      isSaved: false,
      kind: 'album',
    },
    '1O0VHFd6xTl1CfLausE0kN': {
      id: '1O0VHFd6xTl1CfLausE0kN',
      isSaved: false,
      kind: 'album',
    },
    '5wElk4V6mpataJOwrjLsj1': {
      id: '5wElk4V6mpataJOwrjLsj1',
      isSaved: false,
      kind: 'album',
    },
    '3pfyjuT8pPM0i9K3i7n451': {
      id: '3pfyjuT8pPM0i9K3i7n451',
      isSaved: false,
      kind: 'album',
    },
    '4Lj0WgYY0R8DLHM6v2jVr1': {
      id: '4Lj0WgYY0R8DLHM6v2jVr1',
      isSaved: false,
      kind: 'album',
    },
    '3Zzv75PyROH6AMeXN1Yr1h': {
      id: '3Zzv75PyROH6AMeXN1Yr1h',
      isSaved: false,
      kind: 'album',
    },
    '6U2Ncrmi1EeBQQz2NNgh1M': {
      id: '6U2Ncrmi1EeBQQz2NNgh1M',
      isSaved: false,
      kind: 'album',
    },
    '1IZF5Dv3NXSwZPifWMOsIT': {
      id: '1IZF5Dv3NXSwZPifWMOsIT',
      isSaved: false,
      kind: 'album',
    },
    '0KJc9ksnoJJsdpQxV3z5i1': {
      id: '0KJc9ksnoJJsdpQxV3z5i1',
      isSaved: false,
      kind: 'album',
    },
    '7abALHPvL5mIbokvxsAAhH': {
      id: '7abALHPvL5mIbokvxsAAhH',
      isSaved: false,
      kind: 'album',
    },
    '4ui50OJgj4Zbrkpzo1gpsA': {
      id: '4ui50OJgj4Zbrkpzo1gpsA',
      isSaved: false,
      kind: 'album',
    },
    '7yCXgxWLZZEAiVsISKN3BF': {
      id: '7yCXgxWLZZEAiVsISKN3BF',
      isSaved: false,
      kind: 'album',
    },
    '3ZliRX2QN3JCRLC8aX41mO': {
      id: '3ZliRX2QN3JCRLC8aX41mO',
      isSaved: false,
      kind: 'album',
    },
    '3IbXbDy1F1XAtriMtcvLWe': {
      id: '3IbXbDy1F1XAtriMtcvLWe',
      isSaved: false,
      kind: 'album',
    },
    '0jgWVVvhT0tbpzFIr73p3f': {
      id: '0jgWVVvhT0tbpzFIr73p3f',
      isSaved: false,
      kind: 'album',
    },
    '280hU6Lrftj2KAayzIzROw': {
      id: '280hU6Lrftj2KAayzIzROw',
      isSaved: false,
      kind: 'album',
    },
    '6kZ42qRrzov54LcAk4onW9': {
      id: '6kZ42qRrzov54LcAk4onW9',
      isSaved: false,
      kind: 'album',
    },
    '6DEjYFkNZh67HP7R9PSZvv': {
      id: '6DEjYFkNZh67HP7R9PSZvv',
      isSaved: false,
      kind: 'album',
    },
    '4TYdsEDcCdsnWlFxbBjBfr': {
      id: '4TYdsEDcCdsnWlFxbBjBfr',
      isSaved: false,
      kind: 'album',
    },
    '6xqlgBccdlxUh5DeJSx2ho': {
      id: '6xqlgBccdlxUh5DeJSx2ho',
      isSaved: true,
      kind: 'artist',
    },
    '1FY8kqUQKHwjibwLbp5cey': {
      id: '1FY8kqUQKHwjibwLbp5cey',
      isSaved: true,
      kind: 'artist',
    },
    '0L8ExT028jH3ddEcZwqJJ5': {
      id: '0L8ExT028jH3ddEcZwqJJ5',
      isSaved: true,
      kind: 'artist',
    },
    '3zunDAtRDg7kflREzWAhxl': {
      id: '3zunDAtRDg7kflREzWAhxl',
      isSaved: false,
      kind: 'artist',
    },
    '0jWGiEfSygYEYbd423XARv': {
      id: '0jWGiEfSygYEYbd423XARv',
      isSaved: false,
      kind: 'artist',
    },
    '2IMZYfNi21MGqxopj9fWx8': {
      id: '2IMZYfNi21MGqxopj9fWx8',
      isSaved: false,
      kind: 'artist',
    },
    '4IG1SDlwgNKzqTmjBrvY3K': {
      id: '4IG1SDlwgNKzqTmjBrvY3K',
      isSaved: false,
      kind: 'artist',
    },
    '2nu6ZVLgiNcRcWgDKUjplH': {
      id: '2nu6ZVLgiNcRcWgDKUjplH',
      isSaved: false,
      kind: 'artist',
    },
    '5kxnZh8gXyXdIvCWbDMevT': {
      id: '5kxnZh8gXyXdIvCWbDMevT',
      isSaved: false,
      kind: 'artist',
    },
    '4pwqNyMSvuv7VOhQBdjB6Q': {
      id: '4pwqNyMSvuv7VOhQBdjB6Q',
      isSaved: false,
      kind: 'artist',
    },
    '4vVTI94F9uJ8lHNDWKv0i2': {
      id: '4vVTI94F9uJ8lHNDWKv0i2',
      isSaved: true,
      kind: 'track',
    },
    '0bVtevEgtDIeRjCJbK3Lmv': {
      id: '0bVtevEgtDIeRjCJbK3Lmv',
      isSaved: false,
      kind: 'track',
    },
    '1lCRw5FEZ1gPDNPzy1K4zW': {
      id: '1lCRw5FEZ1gPDNPzy1K4zW',
      isSaved: false,
      kind: 'track',
    },
    '5mKfu81dldQ1hjQHy2Wd0A': {
      id: '5mKfu81dldQ1hjQHy2Wd0A',
      isSaved: false,
      kind: 'track',
    },
    '4twiNeOoPDbCFwd7bmu5Yo': {
      id: '4twiNeOoPDbCFwd7bmu5Yo',
      isSaved: false,
      kind: 'track',
    },
    '5Y6nVaayzitvsD5F7nr3DV': {
      id: '5Y6nVaayzitvsD5F7nr3DV',
      isSaved: false,
      kind: 'track',
    },
    '7Ay4yWljTJJ21P3SSHiSeF': {
      id: '7Ay4yWljTJJ21P3SSHiSeF',
      isSaved: false,
      kind: 'track',
    },
    '0jSNNpw6E8lYvQ3Vg6FJiA': {
      id: '0jSNNpw6E8lYvQ3Vg6FJiA',
      isSaved: false,
      kind: 'track',
    },
    '004GpAiyGM5V1JPlN1g0W8': {
      id: '004GpAiyGM5V1JPlN1g0W8',
      isSaved: false,
      kind: 'track',
    },
    '2KvEczLenybvsyHx7URzos': {
      id: '2KvEczLenybvsyHx7URzos',
      isSaved: false,
      kind: 'track',
    },
  },
};

export const savedTracksStoreMock: SavedTrackState = {
  ids: ['4vVTI94F9uJ8lHNDWKv0i2'],
  entities: {
    '4vVTI94F9uJ8lHNDWKv0i2': {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
            },
            href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
            id: '6S0dmVVn4udvppDhZIWxCr',
            name: 'Sean Kingston',
            type: 'artist',
            uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
            },
            href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
            id: '1uNFoZAHBGtllmzznpCI3s',
            name: 'Justin Bieber',
            type: 'artist',
            uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/7yCXgxWLZZEAiVsISKN3BF',
        },
        href: 'https://api.spotify.com/v1/albums/7yCXgxWLZZEAiVsISKN3BF',
        id: '7yCXgxWLZZEAiVsISKN3BF',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2734dea4c1cdf30c359dbaec318',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e024dea4c1cdf30c359dbaec318',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048514dea4c1cdf30c359dbaec318',
            width: 64,
          },
        ],
        name: 'Eenie Meenie',
        release_date: '2010-03-23',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:7yCXgxWLZZEAiVsISKN3BF',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
          },
          href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
          id: '6S0dmVVn4udvppDhZIWxCr',
          name: 'Sean Kingston',
          type: 'artist',
          uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
          },
          href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
          id: '1uNFoZAHBGtllmzznpCI3s',
          name: 'Justin Bieber',
          type: 'artist',
          uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
        },
      ],
      available_markets: [],
      disc_number: 1,
      duration_ms: 201946,
      explicit: false,
      external_ids: {
        isrc: 'USSM11000625',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4vVTI94F9uJ8lHNDWKv0i2',
      },
      href: 'https://api.spotify.com/v1/tracks/4vVTI94F9uJ8lHNDWKv0i2',
      id: '4vVTI94F9uJ8lHNDWKv0i2',
      is_local: false,
      name: 'Eenie Meenie',
      popularity: 74,
      preview_url:
        'https://p.scdn.co/mp3-preview/da0b4e2d7cdcc02bedfd453c6104e57b763cdf54?cid=1a742ee646b74af4a2a648a825f35326',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:4vVTI94F9uJ8lHNDWKv0i2',
    },
  },
  savedTracksLoaded: true,
  totalItems: 1,
};

export const searchesStoreMock: SearchState = {
  ids: ['ee'],
  entities: {
    ee: {
      results: {
        albums: {
          href: 'https://api.spotify.com/v1/search?query=ee&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
          items: [
            {
              album_type: 'album',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                  },
                  href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                  id: '1FY8kqUQKHwjibwLbp5cey',
                  name: 'Eelke Kleijn',
                  type: 'artist',
                  uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/7abALHPvL5mIbokvxsAAhH',
              },
              href: 'https://api.spotify.com/v1/albums/7abALHPvL5mIbokvxsAAhH',
              id: '7abALHPvL5mIbokvxsAAhH',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b2738fa2900c5870c43c27a2cf5e',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e028fa2900c5870c43c27a2cf5e',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d000048518fa2900c5870c43c27a2cf5e',
                  width: 64,
                },
              ],
              name: 'Oscillations',
              release_date: '2020-09-25',
              release_date_precision: 'day',
              total_tracks: 11,
              type: 'album',
              uri: 'spotify:album:7abALHPvL5mIbokvxsAAhH',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                  },
                  href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                  id: '1FY8kqUQKHwjibwLbp5cey',
                  name: 'Eelke Kleijn',
                  type: 'artist',
                  uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/4ui50OJgj4Zbrkpzo1gpsA',
              },
              href: 'https://api.spotify.com/v1/albums/4ui50OJgj4Zbrkpzo1gpsA',
              id: '4ui50OJgj4Zbrkpzo1gpsA',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b27307d3e4a0e1096c577f0df842',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e0207d3e4a0e1096c577f0df842',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d0000485107d3e4a0e1096c577f0df842',
                  width: 64,
                },
              ],
              name: 'De Orde Van De Nacht',
              release_date: '2017-09-28',
              release_date_precision: 'day',
              total_tracks: 1,
              type: 'album',
              uri: 'spotify:album:4ui50OJgj4Zbrkpzo1gpsA',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
                  },
                  href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
                  id: '6S0dmVVn4udvppDhZIWxCr',
                  name: 'Sean Kingston',
                  type: 'artist',
                  uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
                  },
                  href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
                  id: '1uNFoZAHBGtllmzznpCI3s',
                  name: 'Justin Bieber',
                  type: 'artist',
                  uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/7yCXgxWLZZEAiVsISKN3BF',
              },
              href: 'https://api.spotify.com/v1/albums/7yCXgxWLZZEAiVsISKN3BF',
              id: '7yCXgxWLZZEAiVsISKN3BF',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b2734dea4c1cdf30c359dbaec318',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e024dea4c1cdf30c359dbaec318',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d000048514dea4c1cdf30c359dbaec318',
                  width: 64,
                },
              ],
              name: 'Eenie Meenie',
              release_date: '2010-03-23',
              release_date_precision: 'day',
              total_tracks: 1,
              type: 'album',
              uri: 'spotify:album:7yCXgxWLZZEAiVsISKN3BF',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/5kcc4JfcAvxW7FP1za9sa2',
                  },
                  href: 'https://api.spotify.com/v1/artists/5kcc4JfcAvxW7FP1za9sa2',
                  id: '5kcc4JfcAvxW7FP1za9sa2',
                  name: 'Xguiz',
                  type: 'artist',
                  uri: 'spotify:artist:5kcc4JfcAvxW7FP1za9sa2',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/3ZliRX2QN3JCRLC8aX41mO',
              },
              href: 'https://api.spotify.com/v1/albums/3ZliRX2QN3JCRLC8aX41mO',
              id: '3ZliRX2QN3JCRLC8aX41mO',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b273a86c559998e76b1ad224593e',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e02a86c559998e76b1ad224593e',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d00004851a86c559998e76b1ad224593e',
                  width: 64,
                },
              ],
              name: 'Eeeaaaooo',
              release_date: '2020-08-26',
              release_date_precision: 'day',
              total_tracks: 1,
              type: 'album',
              uri: 'spotify:album:3ZliRX2QN3JCRLC8aX41mO',
            },
            {
              album_type: 'compilation',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/3zunDAtRDg7kflREzWAhxl',
                  },
                  href: 'https://api.spotify.com/v1/artists/3zunDAtRDg7kflREzWAhxl',
                  id: '3zunDAtRDg7kflREzWAhxl',
                  name: 'Eels',
                  type: 'artist',
                  uri: 'spotify:artist:3zunDAtRDg7kflREzWAhxl',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/3IbXbDy1F1XAtriMtcvLWe',
              },
              href: 'https://api.spotify.com/v1/albums/3IbXbDy1F1XAtriMtcvLWe',
              id: '3IbXbDy1F1XAtriMtcvLWe',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b27380579a1e5c9be082c2696bbc',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e0280579a1e5c9be082c2696bbc',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d0000485180579a1e5c9be082c2696bbc',
                  width: 64,
                },
              ],
              name: 'Meet The EELS: Essential EELS 1996-2006 Vol. 1',
              release_date: '2008-01-15',
              release_date_precision: 'day',
              total_tracks: 25,
              type: 'album',
              uri: 'spotify:album:3IbXbDy1F1XAtriMtcvLWe',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/7npqy7rgdX2D3yfVyWExKo',
                  },
                  href: 'https://api.spotify.com/v1/artists/7npqy7rgdX2D3yfVyWExKo',
                  id: '7npqy7rgdX2D3yfVyWExKo',
                  name: 'Angel Y Khriz',
                  type: 'artist',
                  uri: 'spotify:artist:7npqy7rgdX2D3yfVyWExKo',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/0jgWVVvhT0tbpzFIr73p3f',
              },
              href: 'https://api.spotify.com/v1/albums/0jgWVVvhT0tbpzFIr73p3f',
              id: '0jgWVVvhT0tbpzFIr73p3f',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b27357e33683aac47215e18e6598',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e0257e33683aac47215e18e6598',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d0000485157e33683aac47215e18e6598',
                  width: 64,
                },
              ],
              name: 'Ven Bailalo (Reggaeton Mix)',
              release_date: '2005-07-22',
              release_date_precision: 'day',
              total_tracks: 2,
              type: 'album',
              uri: 'spotify:album:0jgWVVvhT0tbpzFIr73p3f',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/28GCtr7gDIxtcAeaaWwpIu',
                  },
                  href: 'https://api.spotify.com/v1/artists/28GCtr7gDIxtcAeaaWwpIu',
                  id: '28GCtr7gDIxtcAeaaWwpIu',
                  name: 'Zeb Maessen',
                  type: 'artist',
                  uri: 'spotify:artist:28GCtr7gDIxtcAeaaWwpIu',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/280hU6Lrftj2KAayzIzROw',
              },
              href: 'https://api.spotify.com/v1/albums/280hU6Lrftj2KAayzIzROw',
              id: '280hU6Lrftj2KAayzIzROw',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b27307b38dd17e8ff1e524cc5256',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e0207b38dd17e8ff1e524cc5256',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d0000485107b38dd17e8ff1e524cc5256',
                  width: 64,
                },
              ],
              name: 'Een mooie droom',
              release_date: '2022-02-18',
              release_date_precision: 'day',
              total_tracks: 1,
              type: 'album',
              uri: 'spotify:album:280hU6Lrftj2KAayzIzROw',
            },
            {
              album_type: 'album',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02',
                  },
                  href: 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02',
                  id: '06HL4z0CvFAxyc27GXpf02',
                  name: 'Taylor Swift',
                  type: 'artist',
                  uri: 'spotify:artist:06HL4z0CvFAxyc27GXpf02',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9',
              },
              href: 'https://api.spotify.com/v1/albums/6kZ42qRrzov54LcAk4onW9',
              id: '6kZ42qRrzov54LcAk4onW9',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d00004851318443aab3531a0558e79a4d',
                  width: 64,
                },
              ],
              name: "Red (Taylor's Version)",
              release_date: '2021-11-12',
              release_date_precision: 'day',
              total_tracks: 30,
              type: 'album',
              uri: 'spotify:album:6kZ42qRrzov54LcAk4onW9',
            },
            {
              album_type: 'album',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02',
                  },
                  href: 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02',
                  id: '06HL4z0CvFAxyc27GXpf02',
                  name: 'Taylor Swift',
                  type: 'artist',
                  uri: 'spotify:artist:06HL4z0CvFAxyc27GXpf02',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv',
              },
              href: 'https://api.spotify.com/v1/albums/6DEjYFkNZh67HP7R9PSZvv',
              id: '6DEjYFkNZh67HP7R9PSZvv',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b',
                  width: 64,
                },
              ],
              name: 'reputation',
              release_date: '2017-11-10',
              release_date_precision: 'day',
              total_tracks: 15,
              type: 'album',
              uri: 'spotify:album:6DEjYFkNZh67HP7R9PSZvv',
            },
            {
              album_type: 'single',
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/5z9Z1vlOXGvDLBgKfzdswn',
                  },
                  href: 'https://api.spotify.com/v1/artists/5z9Z1vlOXGvDLBgKfzdswn',
                  id: '5z9Z1vlOXGvDLBgKfzdswn',
                  name: 'Poju',
                  type: 'artist',
                  uri: 'spotify:artist:5z9Z1vlOXGvDLBgKfzdswn',
                },
              ],
              available_markets: [],
              external_urls: {
                spotify:
                  'https://open.spotify.com/album/4TYdsEDcCdsnWlFxbBjBfr',
              },
              href: 'https://api.spotify.com/v1/albums/4TYdsEDcCdsnWlFxbBjBfr',
              id: '4TYdsEDcCdsnWlFxbBjBfr',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab67616d0000b273a04302b0b5199957662bc9a6',
                  width: 640,
                },
                {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e02a04302b0b5199957662bc9a6',
                  width: 300,
                },
                {
                  height: 64,
                  url: 'https://i.scdn.co/image/ab67616d00004851a04302b0b5199957662bc9a6',
                  width: 64,
                },
              ],
              name: 'Eemeli',
              release_date: '2022-10-21',
              release_date_precision: 'day',
              total_tracks: 1,
              type: 'album',
              uri: 'spotify:album:4TYdsEDcCdsnWlFxbBjBfr',
            },
          ],
          limit: 10,
          next: 'https://api.spotify.com/v1/search?query=ee&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
          offset: 0,
          previous: null,
          total: 10171,
        },
        artists: {
          href: 'https://api.spotify.com/v1/search?query=ee&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
          items: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6xqlgBccdlxUh5DeJSx2ho',
              },
              followers: {
                href: null,
                total: 225182,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/6xqlgBccdlxUh5DeJSx2ho',
              id: '6xqlgBccdlxUh5DeJSx2ho',
              images: [
                {
                  height: 680,
                  url: 'https://i.scdn.co/image/08e887f804751c6c9d0a51f6d504685672255bba',
                  width: 999,
                },
                {
                  height: 435,
                  url: 'https://i.scdn.co/image/2c14b8998e3d303f3033d84feef088fb040b2408',
                  width: 639,
                },
                {
                  height: 136,
                  url: 'https://i.scdn.co/image/0eff54c9e47dc163f4645bddfd88b4a32bbbd794',
                  width: 200,
                },
                {
                  height: 44,
                  url: 'https://i.scdn.co/image/e007b6c850f910c59aa925ea2288d880c8306205',
                  width: 64,
                },
              ],
              name: 'Eek-A-Mouse',
              popularity: 47,
              type: 'artist',
              uri: 'spotify:artist:6xqlgBccdlxUh5DeJSx2ho',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
              },
              followers: {
                href: null,
                total: 91209,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
              id: '1FY8kqUQKHwjibwLbp5cey',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5ebb49f1c31e981a05adcb13459',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174b49f1c31e981a05adcb13459',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178b49f1c31e981a05adcb13459',
                  width: 160,
                },
              ],
              name: 'Eelke Kleijn',
              popularity: 49,
              type: 'artist',
              uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5',
              },
              followers: {
                href: null,
                total: 18673432,
              },
              genres: [
              ],
              href: 'https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5',
              id: '0L8ExT028jH3ddEcZwqJJ5',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5ebc33cc15260b767ddec982ce8',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174c33cc15260b767ddec982ce8',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178c33cc15260b767ddec982ce8',
                  width: 160,
                },
              ],
              name: 'Red Hot Chili Peppers',
              popularity: 81,
              type: 'artist',
              uri: 'spotify:artist:0L8ExT028jH3ddEcZwqJJ5',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3zunDAtRDg7kflREzWAhxl',
              },
              followers: {
                href: null,
                total: 413692,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/3zunDAtRDg7kflREzWAhxl',
              id: '3zunDAtRDg7kflREzWAhxl',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5eb70fc0f8e1eece53e15f1db17',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab6761610000517470fc0f8e1eece53e15f1db17',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f17870fc0f8e1eece53e15f1db17',
                  width: 160,
                },
              ],
              name: 'Eels',
              popularity: 56,
              type: 'artist',
              uri: 'spotify:artist:3zunDAtRDg7kflREzWAhxl',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/0jWGiEfSygYEYbd423XARv',
              },
              followers: {
                href: null,
                total: 144,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/0jWGiEfSygYEYbd423XARv',
              id: '0jWGiEfSygYEYbd423XARv',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5ebea3fb923fb5d03e5a2cfd34a',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174ea3fb923fb5d03e5a2cfd34a',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178ea3fb923fb5d03e5a2cfd34a',
                  width: 160,
                },
              ],
              name: 'EE',
              popularity: 44,
              type: 'artist',
              uri: 'spotify:artist:0jWGiEfSygYEYbd423XARv',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8',
              },
              followers: {
                href: null,
                total: 4244894,
              },
              genres: [
              ],
              href: 'https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8',
              id: '2IMZYfNi21MGqxopj9fWx8',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5eb708c21b226c692577b059ff2',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174708c21b226c692577b059ff2',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178708c21b226c692577b059ff2',
                  width: 160,
                },
              ],
              name: 'Rels B',
              popularity: 80,
              type: 'artist',
              uri: 'spotify:artist:2IMZYfNi21MGqxopj9fWx8',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4IG1SDlwgNKzqTmjBrvY3K',
              },
              followers: {
                href: null,
                total: 245728,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/4IG1SDlwgNKzqTmjBrvY3K',
              id: '4IG1SDlwgNKzqTmjBrvY3K',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5eb351497ab26eae0bc95d8d7c6',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174351497ab26eae0bc95d8d7c6',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178351497ab26eae0bc95d8d7c6',
                  width: 160,
                },
              ],
              name: 'Rei',
              popularity: 72,
              type: 'artist',
              uri: 'spotify:artist:4IG1SDlwgNKzqTmjBrvY3K',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2nu6ZVLgiNcRcWgDKUjplH',
              },
              followers: {
                href: null,
                total: 77356,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/2nu6ZVLgiNcRcWgDKUjplH',
              id: '2nu6ZVLgiNcRcWgDKUjplH',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5eb87006a3eb6de8bcc3258e0a0',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab6761610000517487006a3eb6de8bcc3258e0a0',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f17887006a3eb6de8bcc3258e0a0',
                  width: 160,
                },
              ],
              name: 'eery',
              popularity: 41,
              type: 'artist',
              uri: 'spotify:artist:2nu6ZVLgiNcRcWgDKUjplH',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5kxnZh8gXyXdIvCWbDMevT',
              },
              followers: {
                href: null,
                total: 104135,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/5kxnZh8gXyXdIvCWbDMevT',
              id: '5kxnZh8gXyXdIvCWbDMevT',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5ebd2b7b24cbe8acc4ce0460d37',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab67616100005174d2b7b24cbe8acc4ce0460d37',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f178d2b7b24cbe8acc4ce0460d37',
                  width: 160,
                },
              ],
              name: 'Eem Triplin',
              popularity: 63,
              type: 'artist',
              uri: 'spotify:artist:5kxnZh8gXyXdIvCWbDMevT',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4pwqNyMSvuv7VOhQBdjB6Q',
              },
              followers: {
                href: null,
                total: 159137,
              },
              genres: [],
              href: 'https://api.spotify.com/v1/artists/4pwqNyMSvuv7VOhQBdjB6Q',
              id: '4pwqNyMSvuv7VOhQBdjB6Q',
              images: [
                {
                  height: 640,
                  url: 'https://i.scdn.co/image/ab6761610000e5eb36e175f56bd46d4bf90f1bc7',
                  width: 640,
                },
                {
                  height: 320,
                  url: 'https://i.scdn.co/image/ab6761610000517436e175f56bd46d4bf90f1bc7',
                  width: 320,
                },
                {
                  height: 160,
                  url: 'https://i.scdn.co/image/ab6761610000f17836e175f56bd46d4bf90f1bc7',
                  width: 160,
                },
              ],
              name: 'eevee',
              popularity: 50,
              type: 'artist',
              uri: 'spotify:artist:4pwqNyMSvuv7VOhQBdjB6Q',
            },
          ],
          limit: 10,
          next: 'https://api.spotify.com/v1/search?query=ee&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
          offset: 0,
          previous: null,
          total: 2983,
        },
        tracks: {
          href: 'https://api.spotify.com/v1/search?query=ee&type=track&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
          items: [
            {
              album: {
                album_type: 'single',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
                    },
                    href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
                    id: '6S0dmVVn4udvppDhZIWxCr',
                    name: 'Sean Kingston',
                    type: 'artist',
                    uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
                  },
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
                    },
                    href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
                    id: '1uNFoZAHBGtllmzznpCI3s',
                    name: 'Justin Bieber',
                    type: 'artist',
                    uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/7yCXgxWLZZEAiVsISKN3BF',
                },
                href: 'https://api.spotify.com/v1/albums/7yCXgxWLZZEAiVsISKN3BF',
                id: '7yCXgxWLZZEAiVsISKN3BF',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b2734dea4c1cdf30c359dbaec318',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e024dea4c1cdf30c359dbaec318',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d000048514dea4c1cdf30c359dbaec318',
                    width: 64,
                  },
                ],
                name: 'Eenie Meenie',
                release_date: '2010-03-23',
                release_date_precision: 'day',
                total_tracks: 1,
                type: 'album',
                uri: 'spotify:album:7yCXgxWLZZEAiVsISKN3BF',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
                  },
                  href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
                  id: '6S0dmVVn4udvppDhZIWxCr',
                  name: 'Sean Kingston',
                  type: 'artist',
                  uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
                  },
                  href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
                  id: '1uNFoZAHBGtllmzznpCI3s',
                  name: 'Justin Bieber',
                  type: 'artist',
                  uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 201946,
              explicit: false,
              external_ids: {
                isrc: 'USSM11000625',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/4vVTI94F9uJ8lHNDWKv0i2',
              },
              href: 'https://api.spotify.com/v1/tracks/4vVTI94F9uJ8lHNDWKv0i2',
              id: '4vVTI94F9uJ8lHNDWKv0i2',
              is_local: false,
              name: 'Eenie Meenie',
              popularity: 74,
              preview_url:
                'https://p.scdn.co/mp3-preview/da0b4e2d7cdcc02bedfd453c6104e57b763cdf54?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 1,
              type: 'track',
              uri: 'spotify:track:4vVTI94F9uJ8lHNDWKv0i2',
            },
            {
              album: {
                album_type: 'album',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
                    },
                    href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
                    id: '3qm84nBOXUEQ2vnTfUTTFC',
                    name: "Guns N' Roses",
                    type: 'artist',
                    uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5',
                },
                href: 'https://api.spotify.com/v1/albums/3I9Z1nDCL4E0cP62flcbI5',
                id: '3I9Z1nDCL4E0cP62flcbI5',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e0268384dd85fd5e95831252f60',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d0000485168384dd85fd5e95831252f60',
                    width: 64,
                  },
                ],
                name: 'Appetite For Destruction',
                release_date: '1987-07-21',
                release_date_precision: 'day',
                total_tracks: 12,
                type: 'album',
                uri: 'spotify:album:3I9Z1nDCL4E0cP62flcbI5',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
                  },
                  href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
                  id: '3qm84nBOXUEQ2vnTfUTTFC',
                  name: "Guns N' Roses",
                  type: 'artist',
                  uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 272026,
              explicit: true,
              external_ids: {
                isrc: 'USGF18714801',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/0bVtevEgtDIeRjCJbK3Lmv',
              },
              href: 'https://api.spotify.com/v1/tracks/0bVtevEgtDIeRjCJbK3Lmv',
              id: '0bVtevEgtDIeRjCJbK3Lmv',
              is_local: false,
              name: 'Welcome To The Jungle',
              popularity: 79,
              preview_url: 'null',
              track_number: 1,
              type: 'track',
              uri: 'spotify:track:0bVtevEgtDIeRjCJbK3Lmv',
            },
            {
              album: {
                album_type: 'album',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d',
                    },
                    href: 'https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d',
                    id: '1dfeR4HaWDbWqFHLkxsg1d',
                    name: 'Queen',
                    type: 'artist',
                    uri: 'spotify:artist:1dfeR4HaWDbWqFHLkxsg1d',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/7tB40pGzj6Tg0HePj2jWZt',
                },
                href: 'https://api.spotify.com/v1/albums/7tB40pGzj6Tg0HePj2jWZt',
                id: '7tB40pGzj6Tg0HePj2jWZt',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b2731f7077ae1018b5fbab08dfa8',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e021f7077ae1018b5fbab08dfa8',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d000048511f7077ae1018b5fbab08dfa8',
                    width: 64,
                  },
                ],
                name: 'News Of The World (2011 Remaster)',
                release_date: '1977-10-28',
                release_date_precision: 'day',
                total_tracks: 11,
                type: 'album',
                uri: 'spotify:album:7tB40pGzj6Tg0HePj2jWZt',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d',
                  },
                  href: 'https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d',
                  id: '1dfeR4HaWDbWqFHLkxsg1d',
                  name: 'Queen',
                  type: 'artist',
                  uri: 'spotify:artist:1dfeR4HaWDbWqFHLkxsg1d',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 179200,
              explicit: false,
              external_ids: {
                isrc: 'GBUM71029619',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/1lCRw5FEZ1gPDNPzy1K4zW',
              },
              href: 'https://api.spotify.com/v1/tracks/1lCRw5FEZ1gPDNPzy1K4zW',
              id: '1lCRw5FEZ1gPDNPzy1K4zW',
              is_local: false,
              name: 'We Are The Champions - Remastered 2011',
              popularity: 74,
              preview_url: 'null',
              track_number: 2,
              type: 'track',
              uri: 'spotify:track:1lCRw5FEZ1gPDNPzy1K4zW',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/4kmoPUDAnZrnXORuwT5CQB',
                },
                href: 'https://api.spotify.com/v1/albums/4kmoPUDAnZrnXORuwT5CQB',
                id: '4kmoPUDAnZrnXORuwT5CQB',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b273f423371fc2afc686be4b87ea',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e02f423371fc2afc686be4b87ea',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d00004851f423371fc2afc686be4b87ea',
                    width: 64,
                  },
                ],
                name: 'Prabhas Romantic Telugu Superhits',
                release_date: '2022-11-08',
                release_date_precision: 'day',
                total_tracks: 8,
                type: 'album',
                uri: 'spotify:album:4kmoPUDAnZrnXORuwT5CQB',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/6AiX12wXdXFoGJ2vk8zBjy',
                  },
                  href: 'https://api.spotify.com/v1/artists/6AiX12wXdXFoGJ2vk8zBjy',
                  id: '6AiX12wXdXFoGJ2vk8zBjy',
                  name: 'Yuvan Shankar Raja',
                  type: 'artist',
                  uri: 'spotify:artist:6AiX12wXdXFoGJ2vk8zBjy',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/1lr0MlyZ8Q24eFtn7gcMmI',
                  },
                  href: 'https://api.spotify.com/v1/artists/1lr0MlyZ8Q24eFtn7gcMmI',
                  id: '1lr0MlyZ8Q24eFtn7gcMmI',
                  name: 'Harini Ivaturi',
                  type: 'artist',
                  uri: 'spotify:artist:1lr0MlyZ8Q24eFtn7gcMmI',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 232762,
              explicit: false,
              external_ids: {
                isrc: 'INS182115645',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/5mKfu81dldQ1hjQHy2Wd0A',
              },
              href: 'https://api.spotify.com/v1/tracks/5mKfu81dldQ1hjQHy2Wd0A',
              id: '5mKfu81dldQ1hjQHy2Wd0A',
              is_local: false,
              name: 'Ee Raathale (From "Radhe Shyam")',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/d5bf682ca091746bfbc22c68b3285a8fb2b2e94a?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 1,
              type: 'track',
              uri: 'spotify:track:5mKfu81dldQ1hjQHy2Wd0A',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/0PeNjHTzME0QINU5Wp3Xc6',
                },
                href: 'https://api.spotify.com/v1/albums/0PeNjHTzME0QINU5Wp3Xc6',
                id: '0PeNjHTzME0QINU5Wp3Xc6',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b273938b94bb08dccdc8a2d35443',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e02938b94bb08dccdc8a2d35443',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d00004851938b94bb08dccdc8a2d35443',
                    width: 64,
                  },
                ],
                name: 'Shivaraj Kumar Super Hit Songs',
                release_date: '2022-11-08',
                release_date_precision: 'day',
                total_tracks: 10,
                type: 'album',
                uri: 'spotify:album:0PeNjHTzME0QINU5Wp3Xc6',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8',
                  },
                  href: 'https://api.spotify.com/v1/artists/2ae6PxICSOZHvjqiCcgon8',
                  id: '2ae6PxICSOZHvjqiCcgon8',
                  name: 'S. P. Balasubrahmanyam',
                  type: 'artist',
                  uri: 'spotify:artist:2ae6PxICSOZHvjqiCcgon8',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/5fDiPm7RFIZx73fNwnLOxR',
                  },
                  href: 'https://api.spotify.com/v1/artists/5fDiPm7RFIZx73fNwnLOxR',
                  id: '5fDiPm7RFIZx73fNwnLOxR',
                  name: 'Ramesh',
                  type: 'artist',
                  uri: 'spotify:artist:5fDiPm7RFIZx73fNwnLOxR',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/3NzhVoa20crNtp1p4zE8um',
                  },
                  href: 'https://api.spotify.com/v1/artists/3NzhVoa20crNtp1p4zE8um',
                  id: '3NzhVoa20crNtp1p4zE8um',
                  name: 'Mano',
                  type: 'artist',
                  uri: 'spotify:artist:3NzhVoa20crNtp1p4zE8um',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 269426,
              explicit: false,
              external_ids: {
                isrc: 'INS181415825',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/4twiNeOoPDbCFwd7bmu5Yo',
              },
              href: 'https://api.spotify.com/v1/tracks/4twiNeOoPDbCFwd7bmu5Yo',
              id: '4twiNeOoPDbCFwd7bmu5Yo',
              is_local: false,
              name: 'Ee Namma Naade Chendavu (From "Samyuktha")',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/e4a589dd70845d83427f7b55d050774d9e1a0fb3?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 9,
              type: 'track',
              uri: 'spotify:track:4twiNeOoPDbCFwd7bmu5Yo',
            },
            {
              album: {
                album_type: 'album',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa',
                    },
                    href: 'https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa',
                    id: '00FQb4jTyendYWaN8pK0wa',
                    name: 'Lana Del Rey',
                    type: 'artist',
                    uri: 'spotify:artist:00FQb4jTyendYWaN8pK0wa',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/1ORxRsK3MrSLvh7VQTF01F',
                },
                href: 'https://api.spotify.com/v1/albums/1ORxRsK3MrSLvh7VQTF01F',
                id: '1ORxRsK3MrSLvh7VQTF01F',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d000048511624590458126fc8b8c64c2f',
                    width: 64,
                  },
                ],
                name: 'Ultraviolence (Deluxe)',
                release_date: '2014-01-01',
                release_date_precision: 'day',
                total_tracks: 14,
                type: 'album',
                uri: 'spotify:album:1ORxRsK3MrSLvh7VQTF01F',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa',
                  },
                  href: 'https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa',
                  id: '00FQb4jTyendYWaN8pK0wa',
                  name: 'Lana Del Rey',
                  type: 'artist',
                  uri: 'spotify:artist:00FQb4jTyendYWaN8pK0wa',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 256760,
              explicit: false,
              external_ids: {
                isrc: 'GBUM71402081',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/5Y6nVaayzitvsD5F7nr3DV',
              },
              href: 'https://api.spotify.com/v1/tracks/5Y6nVaayzitvsD5F7nr3DV',
              id: '5Y6nVaayzitvsD5F7nr3DV',
              is_local: false,
              name: 'West Coast',
              popularity: 80,
              preview_url: 'null',
              track_number: 5,
              type: 'track',
              uri: 'spotify:track:5Y6nVaayzitvsD5F7nr3DV',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/324gRsmfvM10Qtm8xYJRoK',
                },
                href: 'https://api.spotify.com/v1/albums/324gRsmfvM10Qtm8xYJRoK',
                id: '324gRsmfvM10Qtm8xYJRoK',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b273b7082510269d5191a0381f24',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e02b7082510269d5191a0381f24',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d00004851b7082510269d5191a0381f24',
                    width: 64,
                  },
                ],
                name: 'Megastar Chiranjeevi Super Hit Dance',
                release_date: '2022-11-08',
                release_date_precision: 'day',
                total_tracks: 8,
                type: 'album',
                uri: 'spotify:album:324gRsmfvM10Qtm8xYJRoK',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8',
                  },
                  href: 'https://api.spotify.com/v1/artists/2ae6PxICSOZHvjqiCcgon8',
                  id: '2ae6PxICSOZHvjqiCcgon8',
                  name: 'S. P. Balasubrahmanyam',
                  type: 'artist',
                  uri: 'spotify:artist:2ae6PxICSOZHvjqiCcgon8',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 396434,
              explicit: false,
              external_ids: {
                isrc: 'INS181412114',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/7Ay4yWljTJJ21P3SSHiSeF',
              },
              href: 'https://api.spotify.com/v1/tracks/7Ay4yWljTJJ21P3SSHiSeF',
              id: '7Ay4yWljTJJ21P3SSHiSeF',
              is_local: false,
              name: 'Ee Petaku Nene Mestri (From "Muta Mestri")',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/1626367a2f25e13e0d353c11a411de8bb7ecc39f?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 7,
              type: 'track',
              uri: 'spotify:track:7Ay4yWljTJJ21P3SSHiSeF',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/1SruB1GWAdW1N3nCFsLNQd',
                },
                href: 'https://api.spotify.com/v1/albums/1SruB1GWAdW1N3nCFsLNQd',
                id: '1SruB1GWAdW1N3nCFsLNQd',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b273625534c354c3f78c379d07a4',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e02625534c354c3f78c379d07a4',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d00004851625534c354c3f78c379d07a4',
                    width: 64,
                  },
                ],
                name: 'Evergreen Hits Of Ramoji Rao',
                release_date: '2022-11-16',
                release_date_precision: 'day',
                total_tracks: 10,
                type: 'album',
                uri: 'spotify:album:1SruB1GWAdW1N3nCFsLNQd',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8',
                  },
                  href: 'https://api.spotify.com/v1/artists/2ae6PxICSOZHvjqiCcgon8',
                  id: '2ae6PxICSOZHvjqiCcgon8',
                  name: 'S. P. Balasubrahmanyam',
                  type: 'artist',
                  uri: 'spotify:artist:2ae6PxICSOZHvjqiCcgon8',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/0w1zspBrCXnMx8CcB1WR31',
                  },
                  href: 'https://api.spotify.com/v1/artists/0w1zspBrCXnMx8CcB1WR31',
                  id: '0w1zspBrCXnMx8CcB1WR31',
                  name: 'S. P. Sailaja',
                  type: 'artist',
                  uri: 'spotify:artist:0w1zspBrCXnMx8CcB1WR31',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 281678,
              explicit: false,
              external_ids: {
                isrc: 'INS181414079',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/0jSNNpw6E8lYvQ3Vg6FJiA',
              },
              href: 'https://api.spotify.com/v1/tracks/0jSNNpw6E8lYvQ3Vg6FJiA',
              id: '0jSNNpw6E8lYvQ3Vg6FJiA',
              is_local: false,
              name: 'Ee Nela Mandhira (From "People\'s Encounter")',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/90fd1bb087c2f5fddc9831b19044ae12d21aa905?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 2,
              type: 'track',
              uri: 'spotify:track:0jSNNpw6E8lYvQ3Vg6FJiA',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/1SruB1GWAdW1N3nCFsLNQd',
                },
                href: 'https://api.spotify.com/v1/albums/1SruB1GWAdW1N3nCFsLNQd',
                id: '1SruB1GWAdW1N3nCFsLNQd',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b273625534c354c3f78c379d07a4',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e02625534c354c3f78c379d07a4',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d00004851625534c354c3f78c379d07a4',
                    width: 64,
                  },
                ],
                name: 'Evergreen Hits Of Ramoji Rao',
                release_date: '2022-11-16',
                release_date_precision: 'day',
                total_tracks: 10,
                type: 'album',
                uri: 'spotify:album:1SruB1GWAdW1N3nCFsLNQd',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/2IUtwMti1OiT3lkW6RubgH',
                  },
                  href: 'https://api.spotify.com/v1/artists/2IUtwMti1OiT3lkW6RubgH',
                  id: '2IUtwMti1OiT3lkW6RubgH',
                  name: 'K. S. Chithra',
                  type: 'artist',
                  uri: 'spotify:artist:2IUtwMti1OiT3lkW6RubgH',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/0QHumzvhFwZdpNlP33AuLB',
                  },
                  href: 'https://api.spotify.com/v1/artists/0QHumzvhFwZdpNlP33AuLB',
                  id: '0QHumzvhFwZdpNlP33AuLB',
                  name: 'Sunandha',
                  type: 'artist',
                  uri: 'spotify:artist:0QHumzvhFwZdpNlP33AuLB',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 271882,
              explicit: false,
              external_ids: {
                isrc: 'INS181419313',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/004GpAiyGM5V1JPlN1g0W8',
              },
              href: 'https://api.spotify.com/v1/tracks/004GpAiyGM5V1JPlN1g0W8',
              id: '004GpAiyGM5V1JPlN1g0W8',
              is_local: false,
              name: 'Ee Sarigama Saradaa Yaatralo (From "Theja")',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/57a269dbb739eb1f428854af39817a93a804f56b?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 8,
              type: 'track',
              uri: 'spotify:track:004GpAiyGM5V1JPlN1g0W8',
            },
            {
              album: {
                album_type: 'compilation',
                artists: [
                  {
                    external_urls: {
                      spotify:
                        'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
                    },
                    href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
                    id: '0LyfQWJT6nXafLPZqxe9Of',
                    name: 'Various Artists',
                    type: 'artist',
                    uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
                  },
                ],
                available_markets: [],
                external_urls: {
                  spotify:
                    'https://open.spotify.com/album/3MUpsWTt5aeJbH8CPzyEb2',
                },
                href: 'https://api.spotify.com/v1/albums/3MUpsWTt5aeJbH8CPzyEb2',
                id: '3MUpsWTt5aeJbH8CPzyEb2',
                images: [
                  {
                    height: 640,
                    url: 'https://i.scdn.co/image/ab67616d0000b2739a7c81cbb2a539be78b1ae1a',
                    width: 640,
                  },
                  {
                    height: 300,
                    url: 'https://i.scdn.co/image/ab67616d00001e029a7c81cbb2a539be78b1ae1a',
                    width: 300,
                  },
                  {
                    height: 64,
                    url: 'https://i.scdn.co/image/ab67616d000048519a7c81cbb2a539be78b1ae1a',
                    width: 64,
                  },
                ],
                name: 'Tribute to Superstar Krishna',
                release_date: '2022-11-16',
                release_date_precision: 'day',
                total_tracks: 25,
                type: 'album',
                uri: 'spotify:album:3MUpsWTt5aeJbH8CPzyEb2',
              },
              artists: [
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8',
                  },
                  href: 'https://api.spotify.com/v1/artists/2ae6PxICSOZHvjqiCcgon8',
                  id: '2ae6PxICSOZHvjqiCcgon8',
                  name: 'S. P. Balasubrahmanyam',
                  type: 'artist',
                  uri: 'spotify:artist:2ae6PxICSOZHvjqiCcgon8',
                },
                {
                  external_urls: {
                    spotify:
                      'https://open.spotify.com/artist/0aFGod7DM6b3O5l1AmvFwK',
                  },
                  href: 'https://api.spotify.com/v1/artists/0aFGod7DM6b3O5l1AmvFwK',
                  id: '0aFGod7DM6b3O5l1AmvFwK',
                  name: 'P. Susheela',
                  type: 'artist',
                  uri: 'spotify:artist:0aFGod7DM6b3O5l1AmvFwK',
                },
              ],
              available_markets: [],
              disc_number: 1,
              duration_ms: 269813,
              explicit: false,
              external_ids: {
                isrc: 'INH100511942',
              },
              external_urls: {
                spotify:
                  'https://open.spotify.com/track/2KvEczLenybvsyHx7URzos',
              },
              href: 'https://api.spotify.com/v1/tracks/2KvEczLenybvsyHx7URzos',
              id: '2KvEczLenybvsyHx7URzos',
              is_local: false,
              name: 'Eenaadu Kattukunna',
              popularity: 0,
              preview_url:
                'https://p.scdn.co/mp3-preview/38058e31b67692d156092e304b0392128980d817?cid=1a742ee646b74af4a2a648a825f35326',
              track_number: 5,
              type: 'track',
              uri: 'spotify:track:2KvEczLenybvsyHx7URzos',
            },
          ],
          limit: 10,
          next: 'https://api.spotify.com/v1/search?query=ee&type=track&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
          offset: 0,
          previous: null,
          total: 10208,
        },
        playlists: {
          href: 'https://api.spotify.com/v1/search?query=ee&type=playlist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
          items: [
            {
              collaborative: false,
              description:
                'Lo mejor del Reggaetón Viejo, Don Omar, Daddy Yankee, J Alvarez -  y muchos más!!',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/5wC2X3QsfCc8M3KVv0wkDa',
              },
              href: 'https://api.spotify.com/v1/playlists/5wC2X3QsfCc8M3KVv0wkDa',
              id: '5wC2X3QsfCc8M3KVv0wkDa',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb2ef3a9892ba0b01f35e9f922',
                  width: null,
                },
              ],
              name: 'Reggaetón Viejo (2006-2013)🍻👌',
              owner: {
                display_name: 'Tumpmoney playlists',
                external_urls: {
                  spotify: 'https://open.spotify.com/user/severorobles',
                },
                href: 'https://api.spotify.com/v1/users/severorobles',
                id: 'severorobles',
                type: 'user',
                uri: 'spotify:user:severorobles',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'OTQyLDU2ZTRjMDc5Njk5MzM3ODJiZTJmMThmMGNjY2MxY2IzYzBkMWRiN2I=',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/5wC2X3QsfCc8M3KVv0wkDa/tracks',
                total: 342,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:5wC2X3QsfCc8M3KVv0wkDa',
            },
            {
              collaborative: false,
              description:
                'LO MEJOR DEL NUEVO REGUETON 2022 MUSICA REGGAETON HITS',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/61vj4VRIorkDMWZZIdbGLE',
              },
              href: 'https://api.spotify.com/v1/playlists/61vj4VRIorkDMWZZIdbGLE',
              id: '61vj4VRIorkDMWZZIdbGLE',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb71ea595726182de06d8bcc66',
                  width: null,
                },
              ],
              name: 'REGUETON 2022 😍🔥 LISTA DE EXITOS REGGAETON 2022',
              owner: {
                display_name: 'FIESTA',
                external_urls: {
                  spotify:
                    'https://open.spotify.com/user/jscd88ifetpj8m4i1tivevgbw',
                },
                href: 'https://api.spotify.com/v1/users/jscd88ifetpj8m4i1tivevgbw',
                id: 'jscd88ifetpj8m4i1tivevgbw',
                type: 'user',
                uri: 'spotify:user:jscd88ifetpj8m4i1tivevgbw',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'MTM3OCwxNDE5YTcxOWE4ODhiZGQxYWZjYTFiMGNlMWQ5YzU4MjBlZWQ3ZDIy',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/61vj4VRIorkDMWZZIdbGLE/tracks',
                total: 119,
                items: []
              },
              type: 'playlist',
              uri: 'spotify:playlist:61vj4VRIorkDMWZZIdbGLE',
            },
            {
              collaborative: false,
              description: 'Latin Urban Music🌴 #Reggaeton 🌴',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/38KKRXOUbja6Rm3XiEZhHs',
              },
              href: 'https://api.spotify.com/v1/playlists/38KKRXOUbja6Rm3XiEZhHs',
              id: '38KKRXOUbja6Rm3XiEZhHs',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebbbac194713eda78c5e0fa2faa',
                  width: null,
                },
              ],
              name: 'Eeee parado no bailão',
              owner: {
                display_name: 'Chris',
                external_urls: {
                  spotify:
                    'https://open.spotify.com/user/m2i9qepsktlyx3qgoy1pjf8rg',
                },
                href: 'https://api.spotify.com/v1/users/m2i9qepsktlyx3qgoy1pjf8rg',
                id: 'm2i9qepsktlyx3qgoy1pjf8rg',
                type: 'user',
                uri: 'spotify:user:m2i9qepsktlyx3qgoy1pjf8rg',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'MjQ4LDJmYjU3M2NmZGEwNGI2MTMzZDAzNTU1MGU2ZmY2ZWFmMTEzZDM3ZTA=',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/38KKRXOUbja6Rm3XiEZhHs/tracks',
                total: 155,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:38KKRXOUbja6Rm3XiEZhHs',
            },
            {
              collaborative: false,
              description:
                'Aprende el abecedario con lgante la mejor playlist de maleanteo cumbia 420 pa los negros salas perro primo el nova callejero fino dj Alan Gómez mesa trap mesita elegante remix Kaleb di masi el noba RKT el más ladrón abcdeeee ',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/0UZbUCEWiuIAJFh3cdAv8C',
              },
              href: 'https://api.spotify.com/v1/playlists/0UZbUCEWiuIAJFh3cdAv8C',
              id: '0UZbUCEWiuIAJFh3cdAv8C',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb53f5ca3a7645597f7b079200',
                  width: null,
                },
              ],
              name: 'A B C D Eeee Eeee ( Abecedario L-Gante ) Remix Rkt',
              owner: {
                display_name: 'Facu De Bonis',
                external_urls: {
                  spotify:
                    'https://open.spotify.com/user/3dn58i4r5p1j4adq11bmpzcyk',
                },
                href: 'https://api.spotify.com/v1/users/3dn58i4r5p1j4adq11bmpzcyk',
                id: '3dn58i4r5p1j4adq11bmpzcyk',
                type: 'user',
                uri: 'spotify:user:3dn58i4r5p1j4adq11bmpzcyk',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'NTcxLDY4YTdmZDI2OGZlZWJhZTE1NjFmNTQwZjVjZmMyODAyYjliYjlhNzQ=',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/0UZbUCEWiuIAJFh3cdAv8C/tracks',
                total: 55,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:0UZbUCEWiuIAJFh3cdAv8C',
            },
            {
              collaborative: false,
              description:
                'Regueton Viejito y los Clasicos del Reggaeton. <a href="https://open.spotify.com/playlist/66WFalGuFXfed3D87cFGzA?si=0622d179b80e4da6">REGUETON 2022 AQUI</a>',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/3BcMRvar0zLaT3bHkZqT69',
              },
              href: 'https://api.spotify.com/v1/playlists/3BcMRvar0zLaT3bHkZqT69',
              id: '3BcMRvar0zLaT3bHkZqT69',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb026b734c28e2a9b9f5a4cf53',
                  width: null,
                },
              ],
              name: 'REGUETON VIEJO 🍑 REGGAETON ANTIGUO',
              owner: {
                display_name: 'Pacific Spain',
                external_urls: {
                  spotify: 'https://open.spotify.com/user/pacificspain',
                },
                href: 'https://api.spotify.com/v1/users/pacificspain',
                id: 'pacificspain',
                type: 'user',
                uri: 'spotify:user:pacificspain',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'MTQ3OCxkMzdhZjQ4NmRkY2QyMzAwMjRkNzRhMmFiYmQyNTY2YWJmYjJmOGE0',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/3BcMRvar0zLaT3bHkZqT69/tracks',
                total: 123,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:3BcMRvar0zLaT3bHkZqT69',
            },
            {
              collaborative: false,
              description:
                'Rütmikamad Eesti 90ndate hitid. Youtube-is olemas ka laiem playlist (Eesti retro mix)',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/7A5H3w1WJvnPiuffs208l2',
              },
              href: 'https://api.spotify.com/v1/playlists/7A5H3w1WJvnPiuffs208l2',
              id: '7A5H3w1WJvnPiuffs208l2',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb86423764bfaeed1b7f92103d',
                  width: null,
                },
              ],
              name: 'Eesti 90ndad',
              owner: {
                display_name: 'Kermo Vainjärv',
                external_urls: {
                  spotify:
                    'https://open.spotify.com/user/nmw9r1tln7qymj3xak2pt65zc',
                },
                href: 'https://api.spotify.com/v1/users/nmw9r1tln7qymj3xak2pt65zc',
                id: 'nmw9r1tln7qymj3xak2pt65zc',
                type: 'user',
                uri: 'spotify:user:nmw9r1tln7qymj3xak2pt65zc',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'NTEsNzJlYWYwZmRhZDg5NzYxZWJjZWEwZDA3NTVmMWI0NjFkNjY2MDllMA==',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/7A5H3w1WJvnPiuffs208l2/tracks',
                total: 37,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:7A5H3w1WJvnPiuffs208l2',
            },
            {
              collaborative: false,
              description:
                'The most complete Estonian 🇪🇪 music playlist. All of Estonia&#x27;s biggest hits live here. &quot;Eesti muusika 🇪🇪 uued ja vanad HITID&quot; playlistist leiab kõik Spotify´s leiduvad Eesti artistide uued ja vanad hitid. Playlist on alati ajakohane ja uueneb pidevalt!',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/3DJwQZFbNliBQY4hA533uu',
              },
              href: 'https://api.spotify.com/v1/playlists/3DJwQZFbNliBQY4hA533uu',
              id: '3DJwQZFbNliBQY4hA533uu',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706c0000bebb782b21ced31157f0f3c5cf3c',
                  width: null,
                },
              ],
              name: 'EESTI MUUSIKA  🇪🇪 uued ja vanad HITID | Estonian biggest hits ⚛',
              owner: {
                display_name: 'Aatomik',
                external_urls: {
                  spotify:
                    'https://open.spotify.com/user/e9j4tdxjk67yg0aykawelk51b',
                },
                href: 'https://api.spotify.com/v1/users/e9j4tdxjk67yg0aykawelk51b',
                id: 'e9j4tdxjk67yg0aykawelk51b',
                type: 'user',
                uri: 'spotify:user:e9j4tdxjk67yg0aykawelk51b',
              },
              primary_color: null,
              public: null,
              snapshot_id:
                'MjczNiwxYTQzM2RlMDIwNWYxYjg5OWZkYWUyOTY0Y2NiODU3MTJlMWFjODE1',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/3DJwQZFbNliBQY4hA533uu/tracks',
                total: 901,
                items:[]
              },
              type: 'playlist',
              uri: 'spotify:playlist:3DJwQZFbNliBQY4hA533uu',
            },
            {
              collaborative: false,
              description:
                'Vaana Paatalu, ee weather lo manchi feels ki! \nCover: Dear Comrade',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/37i9dQZF1DX18IgphTr7c1',
              },
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX18IgphTr7c1',
              id: '37i9dQZF1DX18IgphTr7c1',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706f00000003fcd10f84b1681c867ee325bb',
                  width: null,
                },
              ],
              name: 'Ee Varsham..',
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
              snapshot_id:
                'MTY2NTYzOTE3MSwwMDAwMDAwMGEyOWY0Y2E4OTIyMTMzYzk3MzhjZmM5N2RlNjg3ZDY5',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX18IgphTr7c1/tracks',
                total: 35,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:37i9dQZF1DX18IgphTr7c1',
            },
            {
              collaborative: false,
              description:
                'Lekker  eten en lang natafelen? Daar hoort muziek bij!',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/37i9dQZF1DX7yhuKT9G4qk',
              },
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7yhuKT9G4qk',
              id: '37i9dQZF1DX7yhuKT9G4qk',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706f000000035451b7380c3b6eb8f05d3399',
                  width: null,
                },
              ],
              name: 'Eetclub!',
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
              snapshot_id:
                'MTY2ODA3Nzk0NiwwMDAwMDAwMGRjNzk0Y2M4MTIzODE4OWQ4MzYzZmEwZTQzMTJjNzc2',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7yhuKT9G4qk/tracks',
                total: 100,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:37i9dQZF1DX7yhuKT9G4qk',
            },
            {
              collaborative: false,
              description: 'Heel veel cabaret. Cover: Ronald Goedemondt',
              external_urls: {
                spotify:
                  'https://open.spotify.com/playlist/37i9dQZF1DX4vDQ6xWtDkV',
              },
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4vDQ6xWtDkV',
              id: '37i9dQZF1DX4vDQ6xWtDkV',
              images: [
                {
                  height: null,
                  url: 'https://i.scdn.co/image/ab67706f00000003319c89cb71d4b4019e0466d2',
                  width: null,
                },
              ],
              name: 'Een dag niet gelachen',
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
              snapshot_id:
                'MTY1MzM3OTEzOSwwMDAwMDAwMGJjMzM4NWZhYmI5MmM1NDg2NDJkYTYwMmVmNzY2YWIx',
              tracks: {
                href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4vDQ6xWtDkV/tracks',
                total: 851,
                items:[]

              },
              type: 'playlist',
              uri: 'spotify:playlist:37i9dQZF1DX4vDQ6xWtDkV',
            },
          ],
          limit: 10,
          next: 'https://api.spotify.com/v1/search?query=ee&type=playlist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
          offset: 0,
          previous: null,
          total: 10013,
        },
      },
      id: 'ee',
    },
  },
};

export const topUserAlbumsStoreMock:TopUserAlbumsState = {
  ids: [albumWithTracksMockData.id],
  entities: {[albumWithTracksMockData.id]:albumWithTracksMockData},
  topAlbumsLoaded: true,
  totalItems: 1,
};

export const tracksStoreMock:TrackState = {
  ids: [
    '4vVTI94F9uJ8lHNDWKv0i2',
    'testParamsTrack'
],
  entities: {
    '4vVTI94F9uJ8lHNDWKv0i2': {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
            },
            href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
            id: '6S0dmVVn4udvppDhZIWxCr',
            name: 'Sean Kingston',
            type: 'artist',
            uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
            },
            href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
            id: '1uNFoZAHBGtllmzznpCI3s',
            name: 'Justin Bieber',
            type: 'artist',
            uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/7yCXgxWLZZEAiVsISKN3BF',
        },
        href: 'https://api.spotify.com/v1/albums/7yCXgxWLZZEAiVsISKN3BF',
        id: '7yCXgxWLZZEAiVsISKN3BF',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2734dea4c1cdf30c359dbaec318',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e024dea4c1cdf30c359dbaec318',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048514dea4c1cdf30c359dbaec318',
            width: 64,
          },
        ],
        name: 'Eenie Meenie',
        release_date: '2010-03-23',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:7yCXgxWLZZEAiVsISKN3BF',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6S0dmVVn4udvppDhZIWxCr',
          },
          href: 'https://api.spotify.com/v1/artists/6S0dmVVn4udvppDhZIWxCr',
          id: '6S0dmVVn4udvppDhZIWxCr',
          name: 'Sean Kingston',
          type: 'artist',
          uri: 'spotify:artist:6S0dmVVn4udvppDhZIWxCr',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
          },
          href: 'https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s',
          id: '1uNFoZAHBGtllmzznpCI3s',
          name: 'Justin Bieber',
          type: 'artist',
          uri: 'spotify:artist:1uNFoZAHBGtllmzznpCI3s',
        },
      ],
      available_markets: [],
      disc_number: 1,
      duration_ms: 201946,
      explicit: false,
      external_ids: {
        isrc: 'USSM11000625',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4vVTI94F9uJ8lHNDWKv0i2',
      },
      href: 'https://api.spotify.com/v1/tracks/4vVTI94F9uJ8lHNDWKv0i2',
      id: '4vVTI94F9uJ8lHNDWKv0i2',
      is_local: false,
      name: 'Eenie Meenie',
      popularity: 74,
      preview_url:
        'https://p.scdn.co/mp3-preview/da0b4e2d7cdcc02bedfd453c6104e57b763cdf54?cid=1a742ee646b74af4a2a648a825f35326',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:4vVTI94F9uJ8lHNDWKv0i2',
    },
    testParamsTrack: trackMockData
  },
};

export const userStoreMock:User = {
  country: 'AR',
  display_name: 'Noname',
  email: 'julianmarc@gmail.com',
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  external_urls: {
    spotify: 'https://open.spotify.com/user/kme8nnikb0ylimns97in2bwkz',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: 'https://api.spotify.com/v1/users/kme8nnikb0ylimns97in2bwkz',
  id: 'kme8nnikb0ylimns97in2bwkz',
  images: [
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab6775700000ee853e2c6d484224c1354b365b4a',
      width: 300,
    },
  ],
  product: 'premium',
  type: 'user',
  uri: 'spotify:user:kme8nnikb0ylimns97in2bwkz',
  userLoaded: true,
};

export const topUserArtistsStoreMock:TopUserArtistState = {
  "ids": [
      "2suw8cZRpUiapwhFP8tASj",
      "19eLuQmk9aCobbVDHc6eek",
      "16GcWuvvybAoaHr0NqT8Eh",
      "5R3NywPPOyhLfdvutgg0me",
      "1dfeR4HaWDbWqFHLkxsg1d",
      "3AA28KZvwAUcZuOKwyblJQ",
      "0HNW5s2MMFqwKdnf2cmoeB",
      "28INUgyzTTRbvSphrJbgZ2",
      "5qw3MMovQQEq4URS46Ij5C",
      "0WwSkZ7LtFUFjGjMZBMt6T"
  ],
  "entities": {
      "2suw8cZRpUiapwhFP8tASj": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/2suw8cZRpUiapwhFP8tASj"
          },
          "followers": {
              "href": null,
              "total": 27508
          },
          "genres": [
              
          ],
          "href": "https://api.spotify.com/v1/artists/2suw8cZRpUiapwhFP8tASj",
          "id": "2suw8cZRpUiapwhFP8tASj",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b273142fadf98b3989f310f0fc19",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02142fadf98b3989f310f0fc19",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d00004851142fadf98b3989f310f0fc19",
                  "width": 64
              }
          ],
          "name": "Goodnight Moon ASMR",
          "popularity": 42,
          "type": "artist",
          "uri": "spotify:artist:2suw8cZRpUiapwhFP8tASj"
      },
      "19eLuQmk9aCobbVDHc6eek": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/19eLuQmk9aCobbVDHc6eek"
          },
          "followers": {
              "href": null,
              "total": 2570514
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/19eLuQmk9aCobbVDHc6eek",
          "id": "19eLuQmk9aCobbVDHc6eek",
          "images": [
              {
                  "height": 1000,
                  "url": "https://i.scdn.co/image/ab6772690000c46c4a0e9d5e55f9f3721c3243c5",
                  "width": 1000
              },
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6772690000dd224a0e9d5e55f9f3721c3243c5",
                  "width": 640
              },
              {
                  "height": 200,
                  "url": "https://i.scdn.co/image/ab6772690000bac34a0e9d5e55f9f3721c3243c5",
                  "width": 200
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67726900008f744a0e9d5e55f9f3721c3243c5",
                  "width": 64
              }
          ],
          "name": "Louis Armstrong",
          "popularity": 69,
          "type": "artist",
          "uri": "spotify:artist:19eLuQmk9aCobbVDHc6eek"
      },
      "16GcWuvvybAoaHr0NqT8Eh": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/16GcWuvvybAoaHr0NqT8Eh"
          },
          "followers": {
              "href": null,
              "total": 1551804
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/16GcWuvvybAoaHr0NqT8Eh",
          "id": "16GcWuvvybAoaHr0NqT8Eh",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5eb854713444dd710e1fb4a1b69",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab67616100005174854713444dd710e1fb4a1b69",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f178854713444dd710e1fb4a1b69",
                  "width": 160
              }
          ],
          "name": "Alabama Shakes",
          "popularity": 59,
          "type": "artist",
          "uri": "spotify:artist:16GcWuvvybAoaHr0NqT8Eh"
      },
      "5R3NywPPOyhLfdvutgg0me": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/5R3NywPPOyhLfdvutgg0me"
          },
          "followers": {
              "href": null,
              "total": 542454
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/5R3NywPPOyhLfdvutgg0me",
          "id": "5R3NywPPOyhLfdvutgg0me",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5eb8f1b0552958857772686f221",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab676161000051748f1b0552958857772686f221",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f1788f1b0552958857772686f221",
                  "width": 160
              }
          ],
          "name": "Los Abuelos De La Nada",
          "popularity": 61,
          "type": "artist",
          "uri": "spotify:artist:5R3NywPPOyhLfdvutgg0me"
      },
      "1dfeR4HaWDbWqFHLkxsg1d": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
          },
          "followers": {
              "href": null,
              "total": 43670237
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
          "id": "1dfeR4HaWDbWqFHLkxsg1d",
          "images": [
              {
                  "height": 806,
                  "url": "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",
                  "width": 999
              },
              {
                  "height": 516,
                  "url": "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
                  "width": 640
              },
              {
                  "height": 161,
                  "url": "https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368",
                  "width": 200
              },
              {
                  "height": 52,
                  "url": "https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d",
                  "width": 64
              }
          ],
          "name": "Queen",
          "popularity": 83,
          "type": "artist",
          "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
      },
      "3AA28KZvwAUcZuOKwyblJQ": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "followers": {
              "href": null,
              "total": 9518696
          },
          "genres": [
           
          ],
          "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id": "3AA28KZvwAUcZuOKwyblJQ",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5ebc19b16a0104300245c65c164",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab67616100005174c19b16a0104300245c65c164",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f178c19b16a0104300245c65c164",
                  "width": 160
              }
          ],
          "name": "Gorillaz",
          "popularity": 79,
          "type": "artist",
          "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      },
      "0HNW5s2MMFqwKdnf2cmoeB": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/0HNW5s2MMFqwKdnf2cmoeB"
          },
          "followers": {
              "href": null,
              "total": 1945
          },
          "genres": [
         
          ],
          "href": "https://api.spotify.com/v1/artists/0HNW5s2MMFqwKdnf2cmoeB",
          "id": "0HNW5s2MMFqwKdnf2cmoeB",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5eb0452b6fcc5f54576abc968ba",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab676161000051740452b6fcc5f54576abc968ba",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f1780452b6fcc5f54576abc968ba",
                  "width": 160
              }
          ],
          "name": "Atlas ASMR",
          "popularity": 21,
          "type": "artist",
          "uri": "spotify:artist:0HNW5s2MMFqwKdnf2cmoeB"
      },
      "28INUgyzTTRbvSphrJbgZ2": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/28INUgyzTTRbvSphrJbgZ2"
          },
          "followers": {
              "href": null,
              "total": 593796
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/28INUgyzTTRbvSphrJbgZ2",
          "id": "28INUgyzTTRbvSphrJbgZ2",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5ebad836b81ffe6679bc8467648",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab67616100005174ad836b81ffe6679bc8467648",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f178ad836b81ffe6679bc8467648",
                  "width": 160
              }
          ],
          "name": "C2C",
          "popularity": 45,
          "type": "artist",
          "uri": "spotify:artist:28INUgyzTTRbvSphrJbgZ2"
      },
      "5qw3MMovQQEq4URS46Ij5C": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/5qw3MMovQQEq4URS46Ij5C"
          },
          "followers": {
              "href": null,
              "total": 4532
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/5qw3MMovQQEq4URS46Ij5C",
          "id": "5qw3MMovQQEq4URS46Ij5C",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b273649308b15a74e39feab03df6",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02649308b15a74e39feab03df6",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d00004851649308b15a74e39feab03df6",
                  "width": 64
              }
          ],
          "name": "Catplant ASMR",
          "popularity": 33,
          "type": "artist",
          "uri": "spotify:artist:5qw3MMovQQEq4URS46Ij5C"
      },
      "0WwSkZ7LtFUFjGjMZBMt6T": {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/0WwSkZ7LtFUFjGjMZBMt6T"
          },
          "followers": {
              "href": null,
              "total": 6172626
          },
          "genres": [

          ],
          "href": "https://api.spotify.com/v1/artists/0WwSkZ7LtFUFjGjMZBMt6T",
          "id": "0WwSkZ7LtFUFjGjMZBMt6T",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5eb4bdaa8c5e65b64f50549c393",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab676161000051744bdaa8c5e65b64f50549c393",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f1784bdaa8c5e65b64f50549c393",
                  "width": 160
              }
          ],
          "name": "Dire Straits",
          "popularity": 74,
          "type": "artist",
          "uri": "spotify:artist:0WwSkZ7LtFUFjGjMZBMt6T"
      }
  },
  "topUserArtistsLoaded": true
}