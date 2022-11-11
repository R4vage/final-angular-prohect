import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Artist } from 'src/app/core/models/album.models';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist!: Artist;
  @Input() buttons: boolean = false;
  @Output() clickEmitter = new EventEmitter<boolean>();
  isLiked!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
