import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';
import {
  addTopUserAlbum,
  deleteTopUserAlbum,
} from 'src/app/my-music-page/store/actions/top-albums.actions';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() album!: AlbumItem;
  isSaved!: boolean;
  @ViewChild('star', { static: true }) star!: ElementRef;
  subscription$: Subscription[] = []

  constructor(private store: Store<SavedItem>, private router: Router) {}

  ngOnInit(): void {
    this.subscription$.push(this.store
      .select(selectSavedItemById(this.album.id))
      .subscribe((savedItem) => (this.isSaved = savedItem?.isSaved as boolean)))
  }

  ngAfterViewInit(): void {
    console.log(this.star.nativeElement)
    this.subscription$.push(
      fromEvent(this.star.nativeElement, 'click')
      .pipe( debounceTime(1000))
      .subscribe((event) => {
        this.changeSaveState()
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription$.map((subscription)=> subscription.unsubscribe())
  }

  changeSaveState() {
    if (this.isSaved) {
      this.store.dispatch(deleteTopUserAlbum({ id: this.album.id }));
    } else {
      this.store.dispatch(addTopUserAlbum({ topUserAlbum: this.album }));
    }
    this.store.dispatch(
      updateSavedItem({
        id: this.album.id,
        kind: 'album',
        isSaved: !this.isSaved,
      })
    );
  }
}
