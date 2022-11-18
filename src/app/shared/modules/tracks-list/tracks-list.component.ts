import { Component, Input, OnInit } from '@angular/core';
import { TrackItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss'],
})
export class TracksListComponent{
  @Input() tracks!: Track[] | undefined;

  constructor(private trackService: TrackService) {}
}
