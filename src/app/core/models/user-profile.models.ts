import { ImageInfo } from "./extras.models";

export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null | string;
    total: number;
  };
  href: string;
  id: string;
  images: ImageInfo[];
  product: string;
  type: string;
  uri: string;
  userLoaded:boolean;
}
