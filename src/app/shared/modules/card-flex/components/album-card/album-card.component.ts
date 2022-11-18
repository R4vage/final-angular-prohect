import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';
import { addTopUserAlbum, deleteTopUserAlbum } from 'src/app/my-music-page/store/actions/top-albums.actions';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit, OnDestroy {
  @Input() album!: AlbumItem;
  isSaved!:boolean;
  subscription$!: Subscription

  constructor(private store:Store<SavedItem>, private router: Router) { }

  ngOnInit(): void {
    this.subscription$ = this.store.select(selectSavedItemById(this.album.id)).subscribe(
      savedItem => this.isSaved = savedItem?.isSaved as boolean
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  changeSaveState (event:MouseEvent) {
    event.stopPropagation();
    if(this.isSaved) {
      this.store.dispatch(deleteTopUserAlbum({id: this.album.id}))
    } else {
      this.store.dispatch(addTopUserAlbum({topUserAlbum:this.album}))
    }
    this.store.dispatch(updateSavedItem({id:this.album.id, kind:'album', isSaved:!this.isSaved}))
  }

}
