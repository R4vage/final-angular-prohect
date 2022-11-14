import { Playlists } from './playlist.models';

export interface MainCategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  items: CategoryItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface CategoryItem {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
  playlists?: Playlists;
}

export interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}
