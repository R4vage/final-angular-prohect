import { Component, Input, OnInit } from '@angular/core';
import { AlbumItem, TrackItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss'],
})
export class TracksListComponent{
  @Input() tracks!: Track[] | undefined;
  @Input() album!: AlbumItem;
  constructor() {}
}
