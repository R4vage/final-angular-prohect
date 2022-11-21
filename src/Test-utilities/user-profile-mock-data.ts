import { UserTopArtistsResponse, UserTopTracksResponse } from "src/app/core/models/rest.models";
import { User } from "src/app/core/models/user-profile.models";
import { artistMockData } from "./artists-mock-data";
import { trackMockData } from "./track-mock-data";

export const userMock: User = {
    country: 'mock',
    display_name:'mock',
    email: 'mock',
    explicit_content: {
        filter_enabled: false,
        filter_locked: false
    },
    external_urls:{
        spotify: 'mock'
    },
    followers: {
        href:'mock',
        total:2
    },
    href: 'mock',
    id: 'mock',
    images:[
        {
            url:'./assets/image-not-found.png',
            height:200,
            width: 200
        }
    ],
    product:'mock',
    type: 'mock',
    uri: 'mock',
    userLoaded: true
}

export const topTracksResponseMock:UserTopTracksResponse = {
    items: [trackMockData],
    href: '',
    next: '',
    limit: 10,
    offset: 5,
    previous: 1,
    total: 1
}

export const topArtistResponseMock: UserTopArtistsResponse = {
    items: artistMockData,
    href: '',
    next: '',
    limit: 10,
    offset: 5,
    previous: 1,
    total: 1
}