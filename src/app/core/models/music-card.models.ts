export interface MusicCard {
  title: string;
  imageUrl: string;
  artist?: string | string[];
  date?: Date | string;
  duration?: string;
  description?: string;
}
