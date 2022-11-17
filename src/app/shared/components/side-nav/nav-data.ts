import { NavData } from 'src/app/core/models/nav-data.models';

export const sideNavData: NavData[] = [
  {
    icon: 'home',
    routerLink: 'home',
    label: 'Dashboard',
  },
  {
     icon: 'album',
    routerLink: 'my-music',
    label: 'My Music',
  }
  // {
  //   icon: 'queue_music',
  //   routerLink: 'playlist',
  //   label: 'Playlist',
  // },
  // {
  //   icon: 'smart_display',
  //   routerLink: 'category',
  //   label: 'Category',
  // },
];
