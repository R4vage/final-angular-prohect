import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlbumItem } from 'src/app/core/models/album.models';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() album!: AlbumItem;
  @Output() followClicked = new EventEmitter<boolean>;
  isSaved!:boolean;

  constructor(private store:Store<SavedItem>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectSavedItemById(this.album.id)).subscribe(
      savedItem => this.isSaved = savedItem?.isSaved as boolean
    )
  }

  changeSaveState (event:MouseEvent) {
    event.stopPropagation();
    this.followClicked.emit(!this.isSaved);
    this.store.dispatch(updateSavedItem({id:this.album.id, kind:'album', isSaved:!this.isSaved}))
  }

}
