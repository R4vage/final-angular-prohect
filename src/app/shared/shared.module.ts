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

const COMPONENTS = [SideNavComponent, NavBarComponent, MusicCardComponent];

const PIPES = [AlbumToMusicPipe, TitleCardTruncatePipe, PlaylistToMusicPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
