import { MockSelector } from "@ngrx/store/testing";
import { playlistsMockData } from "./playlist-mock-data";

export const storesSelectorsMock: MockSelector[] = [
    {selector: 'selectIdUser', value: 'mockId'},
]