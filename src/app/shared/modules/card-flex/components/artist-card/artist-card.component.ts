import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { Artist } from 'src/app/core/models/album.models';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() artist!: Artist;
  @ViewChild('star', { static: true }) star!: ElementRef;
  subscription$: Subscription[] = []
  isSaved!:boolean;

  constructor(private store:Store<SavedItem>) { }

  ngOnInit(): void {
    this.subscription$.push(
      this.store.select(selectSavedItemById(this.artist.id)).subscribe(
        savedItem => this.isSaved = savedItem?.isSaved as boolean
      )
    )
  }

  ngAfterViewInit(): void {
    this.subscription$.push(
      fromEvent(this.star.nativeElement, 'click')
      .pipe( debounceTime(1000))
      .subscribe((event) => {
        this.store.dispatch(updateSavedItem({id:this.artist.id, kind:'artist', isSaved:!this.isSaved}))
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription$.map((subscription)=> subscription.unsubscribe())
  }

}
