import { Component, Input } from '@angular/core';
import { PlaylistItem } from 'src/app/core/models/playlist.models';

@Component({
  selector: 'app-playlist-card',
  template: '<div>Mocked Playlist Card</div>'
})
export class PlaylistCardComponentMock {
  @Input() playlist!: PlaylistItem;
  @Input() buttons = false;
}
