import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { Playlist } from 'src/app/core/models/playlist.models';
import { selectPlaylistById } from 'src/app/main-page/main-page-store/selectors/playlist.selectors';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
import { updateSavedItemFailure, updateSavedItemSuccess } from 'src/app/saved-store/saved-item.actions';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';
import { selectIdUser } from 'src/app/user-profile/user-profile-store/selectors/user.selectors';

@Component({
  selector: 'app-playlist-detail-page',
  templateUrl: './playlist-detail-page.component.html',
})
export class PlaylistDetailPageComponent implements OnInit {
  playlist$!: Observable<Playlist | undefined>;
  onDestroy = new Subject<boolean>();
  idPlaylist!: string;
  isSaved: boolean | undefined = false;
  loading = false;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.idPlaylist = params['id'];
        this.playlist$ = this.store.pipe(
          select(selectPlaylistById(this.idPlaylist))
        ) as Observable<Playlist>;
      },
    });
    this.store
      .select(selectSavedItemById(this.idPlaylist))
      .subscribe((savedItem) => {
        this.isSaved = savedItem?.isSaved;
      });
  }

  getImage(playlist: Playlist) {
    return playlist.images[0].url;
  }

  clickFollowButton () {
    if (!this.loading && this.isSaved !== undefined) {
      this.loading = true;
      this.playlistService.changePlayStoreState(this.idPlaylist, this.isSaved);
      this.actions$.pipe(
        ofType(updateSavedItemSuccess, updateSavedItemFailure),
        take(1)
      )
      .subscribe(() => {
        this.loading = false;
      });
    }
  }

  unfollowPlaylist(userId: string) {
    this.playlistService.unfollowPlaylistStore(userId);
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
