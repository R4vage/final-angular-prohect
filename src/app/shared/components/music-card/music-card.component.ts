import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MusicCard } from 'src/app/core/models/music-card.models';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicCardComponent {
  @Input() musicData!: MusicCard;

  constructor() {}
}
