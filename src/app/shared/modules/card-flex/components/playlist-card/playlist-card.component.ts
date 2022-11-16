import { Component, OnInit, Input } from '@angular/core';
import { PlaylistItem } from 'src/app/core/models/playlist.models';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist!: PlaylistItem;
  @Input() buttons = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
