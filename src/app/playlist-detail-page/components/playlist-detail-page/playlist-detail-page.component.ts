import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Playlist } from 'src/app/core/models/playlist.models';
import { selectPlaylistById } from 'src/app/main-page/main-page-store/selectors/playlist.selectors';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
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

  isSaved:boolean | undefined = false;

  isTrackFollowed = true;

  constructor(private store: Store, private route: ActivatedRoute, private playlistService: PlaylistService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.idPlaylist = params['id'];
        this.playlist$ = this.store.pipe(select(selectPlaylistById(this.idPlaylist))) as Observable<Playlist>;
      },
    }) 
    this.store.select(selectSavedItemById(this.idPlaylist)).subscribe(savedItem => {
      this.isSaved = savedItem?.isSaved
    })
  }

  getImage(playlist: Playlist) {
    return playlist.images[0].url;
  }

 

  followPlaylist(userId: string) {
    this.playlistService.followPlaylistStore(userId)
    this.snackbar.open('The playlist has been followed!', 'Close', {
      duration: 2000,
      panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
 
    });

  }

  unfollowPlaylist(userId: string) {
    this.playlistService.unfollowPlaylistStore(userId)
        this.snackbar.open('The playlist has been unfollowed!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],

    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
