import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';

@Component({
  selector: 'app-album-card',
  template: '<div class="card">Mocked Album Card</div>',
})
export class AlbumCardComponentMock {
  @Input() album!: AlbumItem;
  isSaved!: boolean;
  subscription$: Subscription[] = [];
  loading = false;
}
