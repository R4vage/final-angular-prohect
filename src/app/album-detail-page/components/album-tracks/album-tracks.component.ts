import { Component, Input, OnInit } from '@angular/core';
import { TrackItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.scss'],
})
export class AlbumTracksComponent implements OnInit {
  @Input() tracks!: TrackItem[] | undefined;

  constructor(private trackService: TrackService) {}
  isTracksSaved = Array(this.tracks?.length).fill(false);

  ngOnInit(): void {
    if (this.tracks) {
      this.checkSavedTracksPlaylist(this.getIdsTracks(this.tracks));
    }
  }

  getIdsTracks(tracks: TrackItem[]) {
    return tracks.map((track) => track.id).join();
  }

  checkSavedTracksPlaylist(tracksIds: string) {
    this.trackService.checkSavedTrack(tracksIds).subscribe({
      next: (isTrackSavedArray) => {
        this.isTracksSaved = isTrackSavedArray;
      },
      error: () => {
        this.isTracksSaved = Array(this.tracks?.length).fill(false);
      },
    });
  }

  saveTrack(trackId: string, indexTrack: number) {
    this.trackService.saveTrack(trackId).subscribe();

    this.isTracksSaved[indexTrack] = true;
  }

  deleteTrack(trackId: string, indexTrack: number) {
    this.trackService.deleteTrack(trackId).subscribe();

    this.isTracksSaved[indexTrack] = false;
  }

  saveAndDeleteTrack(trackId: string, indexTrack: number) {
    if (this.isTracksSaved[indexTrack]) {
      this.deleteTrack(trackId, indexTrack);
    } else {
      this.saveTrack(trackId, indexTrack);
    }
  }
}
