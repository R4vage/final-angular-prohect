import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MusicCard } from 'src/app/core/models/music-card.models';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicCardComponent implements OnInit {
  @Input() musicData!: MusicCard;

  constructor() {}

  ngOnInit(): void {}
}
