import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription, take } from 'rxjs';
import { Artist } from '../core/models/album.models';
import { ArtistAlbums, ArtistDetails } from '../core/models/artist.models';
import { Track } from '../core/models/track.models';
import { updateSavedItem } from '../saved-store/saved-item.actions';
import { selectSavedItemById } from '../saved-store/saved-item.selectors';
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
  artistAlbums$!: Observable<ArtistAlbums | undefined>;
  artistTopTracks$!: Observable<Track[] | undefined>;
  artistRelatedArtists$!: Observable<Artist[] | undefined>;
  artistFollowing!: boolean;
  artistDetails$!: Observable<ArtistDetails | undefined>;
  resultsSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.artistId = params['id'];

        this.artistDetails$ = this.store
          .select(selectArtistByValue(this.artistId))
          .pipe(map((results) => results?.results));

        this.artistAlbums$ = this.store
          .select(selectArtistAlbumsByValue(this.artistId))
          .pipe(map((results) => results?.results));

        this.artistTopTracks$ = this.store
          .select(selectArtistTopTracksByValue(this.artistId))
          .pipe(map((results) => results?.results.tracks));

        this.artistRelatedArtists$ = this.store
          .select(selectArtistRelatedArtistsByValue(this.artistId))
          .pipe(map((results) => results?.results.artists));
      },
    });

    this.store
      .select(selectSavedItemById(this.artistId))
      .subscribe(
        (savedItem) => (this.artistFollowing = savedItem?.isSaved as boolean)
      );
  }

  getImage(artist: ArtistDetails) {
    return artist.images.find((image) => image.height >= 300)?.url;
  }

  changeSaveState(event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(
      updateSavedItem({
        id: this.artistId,
        kind: 'artist',
        isSaved: !this.artistFollowing,
      })
    );
  }
}
