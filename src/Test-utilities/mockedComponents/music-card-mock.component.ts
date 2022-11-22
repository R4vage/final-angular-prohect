import { Component, Input } from '@angular/core';
import { MusicCard } from 'src/app/core/models/music-card.models';

@Component({
  selector: 'app-music-card',
  template: '<div>Mocked Music Card</div>',
})
export class MusicCardComponentMock {
  @Input() musicData!: MusicCard;
}
