import { Component, Input, OnInit } from '@angular/core';
import { AlbumItem } from 'src/app/core/models/album.models';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() album!: AlbumItem
  constructor() { }

  ngOnInit(): void {
  }

}
