import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, takeUntil, tap, switchMap, map } from 'rxjs';
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

  isPlaylistSaved = true;
  isPlaylistNotSaved = true;

  isTrackSaved = true;

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
          this.checkSavedPlaylist(this.idUser, this.idPlaylist);
        },
      });
  }

  getImage(playlist: Playlist) {
    return playlist.images[0].url;
  }

  checkSavedPlaylist(userId: string, playlistId: string) {
    this.playlistService
      .checkSavedPlaylist(userId, playlistId)
      .pipe(map((isPlaylistSavedArray) => isPlaylistSavedArray[0]))
      .subscribe({
        next: (isPlaylistSaved) => {
          this.isPlaylistSaved = isPlaylistSaved;
          this.isPlaylistNotSaved = !isPlaylistSaved;
        },
        error: () => {
          this.isPlaylistSaved = true;
          this.isPlaylistNotSaved = true;
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

    this.isPlaylistSaved = true;
    this.isPlaylistNotSaved = false;
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

    this.isPlaylistSaved = false;
    this.isPlaylistNotSaved = true;
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
