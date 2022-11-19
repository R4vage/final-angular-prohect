import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/core/models/track.models';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
})
export class PlaylistTracksComponent implements OnInit {
  @Input() tracks!: Track[] | undefined;

  constructor(private trackService: TrackService) {}
  isTracksSaved = Array(this.tracks?.length).fill(false);

  ngOnInit(): void {

  }

  getIdsTracks(tracks: Track[]) {
    return tracks.map((track) => track.id).join();
  }





}
