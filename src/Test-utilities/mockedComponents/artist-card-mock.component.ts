import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Artist } from 'src/app/core/models/track.models';

@Component({
  selector: 'app-artist-card',
  template: '<div class="card">Mocked Album Card</div>',
})
export class ArtistCardComponentMock {
  @Input() artist!: Artist;
  isSaved!: boolean;
  subscription$: Subscription[] = [];
  loading = false;
}
