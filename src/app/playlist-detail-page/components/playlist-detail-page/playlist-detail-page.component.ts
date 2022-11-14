import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Playlist } from 'src/app/core/models/playlist.models';
import { selectPlaylistById } from 'src/app/main-page/main-page-store/selectors/playlist.selectors';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
import { selectIdUser } from 'src/app/user-profile/user-profile-store/selectors/user.selectors';

@Component({
  selector: 'app-playlist-detail-page',
  templateUrl: './playlist-detail-page.component.html',
})
export class PlaylistDetailPageComponent implements OnInit {
  playlist$!: Observable<Playlist | undefined>;
  onDestroy = new Subject<boolean>();

  idPlaylist!: string;
  idUser!: string;

  playlist!: Playlist | undefined;

  isPlaylistFollowed = true;
  isPlaylistNotFollowed = true;

  isTrackFollowed = true;

  constructor(private store: Store, private route: ActivatedRoute, private playlistService: PlaylistService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy),
        tap({
          next: (params) => {
            this.idPlaylist = params['id'];
            this.playlist$ = this.store.pipe(select(selectPlaylistById(this.idPlaylist))) as Observable<Playlist>;
          },
        }),
        switchMap((params) => {
          return this.store.pipe(takeUntil(this.onDestroy), select(selectIdUser));
        })
      )
      .subscribe({
        next: (userId) => {
          this.idUser = userId;
          this.checkFollowedPlaylist(this.idUser, this.idPlaylist);
        },
      });
  }

  getImage(playlist: Playlist) {
    return playlist.images[0].url;
  }

  checkFollowedPlaylist(userId: string, playlistId: string) {
    this.playlistService
      .checkFollowedPlaylist(userId, playlistId)
      .pipe(map((isPlaylistFollowedArray) => isPlaylistFollowedArray[0]))
      .subscribe({
        next: (isPlaylistFollowed) => {
          this.isPlaylistFollowed = isPlaylistFollowed;
          this.isPlaylistNotFollowed = !isPlaylistFollowed;
        },
        error: () => {
          this.isPlaylistFollowed = true;
          this.isPlaylistNotFollowed = true;
        },
      });
  }

  followPlaylist(userId: string, playlistId: string) {
    this.playlistService.followPlaylist(userId, playlistId).subscribe({
      next: () => {
        this.snackbar.open('The playlist has been followed!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isPlaylistFollowed = true;
    this.isPlaylistNotFollowed = false;
  }

  unfollowPlaylist(userId: string, playlistId: string) {
    this.playlistService.unfollowPlaylist(userId, playlistId).subscribe({
      next: () => {
        this.snackbar.open('The playlist has been unfollowed!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isPlaylistFollowed = false;
    this.isPlaylistNotFollowed = true;
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
