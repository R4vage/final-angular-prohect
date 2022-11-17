import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Artist } from '../core/models/album.models';
import { ArtistAlbums, ArtistDetails } from '../core/models/artist.models';
import { Track } from '../core/models/track.models';
import { ArtistDetailsState } from './artist-store/reducers/artist-detail.reducer';
import { selectArtistAlbumsByValue } from './artist-store/selectors/artist-albums.selectors';
import { selectArtistByValue } from './artist-store/selectors/artist-detail.selectors';
import { selectArtistRelatedArtistsByValue } from './artist-store/selectors/artist-related-artist.selectors';
import { selectArtistTopTracksByValue } from './artist-store/selectors/artist-top-tracks.selectors';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit {
  artistId!: string;
  artistDetails!: ArtistDetails;
  artistAlbums!: ArtistAlbums;
  artistTopTracks: Track[] = [];
  artistRelatedArtists: Artist[] = [];
  resultsSubscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private store: Store<ArtistDetailsState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.artistId = params['id'];

        this.resultsSubscription = this.store
          .select(selectArtistByValue(this.artistId))
          .subscribe((results) => {
            if (results) {
              this.artistDetails = results.results;
            }
          });
        this.store
          .select(selectArtistAlbumsByValue(this.artistId))
          .subscribe((results) => {
            if (results) {
              this.artistAlbums = results.results;
            }
          });
        this.store
          .select(selectArtistTopTracksByValue(this.artistId))
          .subscribe((results) => {
            if (results) {
              this.artistTopTracks = results.results.tracks;
            }
          });
        this.store
          .select(selectArtistRelatedArtistsByValue(this.artistId))
          .subscribe((results) => {
            if (results) {
              this.artistRelatedArtists = results.results.artists;
            }
          });
      },
    });
  }

  getImage(artist: ArtistDetails) {
    return artist.images.find((image) => image.height >= 300)?.url;
  }
}
