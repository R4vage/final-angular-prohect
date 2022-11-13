import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { AlbumToMusicPipe } from './pipes/album-to-music.pipe';
import { TitleCardTruncatePipe } from './pipes/title-card-truncate.pipe';
import { PlaylistToMusicPipe } from './pipes/playlist-to-music.pipe';
import { CategoryToMusicPipe } from './pipes/category-to-music.pipe';
import { CardListComponent } from './components/card-list/card-list.component';
import { ListArtistsPipe } from './pipes/list-artists.pipe';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondTrackMusicPipe } from './pipes/second-track-music.pipe';
import { AlbumTotalDurationPipe } from './pipes/album-total-duration.pipe';
import { TracksFromPlaylistPipe } from './pipes/tracks-from-playlist.pipe';

const COMPONENTS = [SideNavComponent, NavBarComponent, MusicCardComponent, CardListComponent, AudioPlayerComponent];

const PIPES = [
  AlbumToMusicPipe,
  TitleCardTruncatePipe,
  PlaylistToMusicPipe,
  CategoryToMusicPipe,
  ListArtistsPipe,
  SecondTrackMusicPipe,
  AlbumTotalDurationPipe,
  TracksFromPlaylistPipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
