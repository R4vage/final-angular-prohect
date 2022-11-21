import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';

@Component({
  selector: 'app-track-card',
  template: '<div class="card">Mocked Album Card</div>',
})
export class TrackCardComponentMock {
  @Input() track!: Track;
  isSaved!: boolean;
  subscription$: Subscription[] = [];
  loading = false;
}
