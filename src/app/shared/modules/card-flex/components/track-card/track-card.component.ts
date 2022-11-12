import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Track } from 'src/app/core/models/track.models';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {
  @Input() track!: Track
  @Input() buttons: boolean = false;
  @Output() removeEmitter = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  clickRemove (event:MouseEvent) {
    this.removeEmitter.emit(event)
  }

}
