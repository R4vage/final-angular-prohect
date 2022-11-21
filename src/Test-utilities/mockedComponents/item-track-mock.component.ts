import { Component, Input } from '@angular/core';
import { AlbumItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';

@Component({
  selector: 'app-track-item',
  template: '<p>Mocked Component</p>',
})
export class TrackItemComponentMock {
  @Input() track!: Track;
  @Input() index!: number;
  @Input() album!: AlbumItem;
  loading = false;
  isSaved: boolean | undefined = false;
}
