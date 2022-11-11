import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subject, takeUntil, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  @Input() musicURL!: string;

  currentTime = 0;
  durationSong = 0;
  audio!: HTMLAudioElement;
  canPlay!: boolean;

  onDestroy$ = new Subject();

  isPlayingAudio = false;

  constructor() {}

  ngOnInit(): void {
    this.audio = new Audio(this.musicURL);
    this.audio.load();

    this.audio.volume = 1;
    fromEvent(this.audio, 'timeupdate')
      .pipe(takeUntil(this.onDestroy$), throttleTime(400))
      .subscribe({
        next: () => {
          this.currentTime = this.audio.currentTime;
        },
      });
    fromEvent(this.audio, 'canplaythrough')
      .pipe(takeUntil(this.onDestroy$), throttleTime(400))
      .subscribe({
        next: () => {
          this.durationSong = this.audio.duration;
        },
      });
  }

  playAudio() {
    if (!this.isPlayingAudio) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.isPlayingAudio = !this.isPlayingAudio;
  }

  volumeManager(volume: number) {
    this.audio.volume = volume / 100;
  }

  currentTimeManager(time: number) {
    this.audio.pause();
    this.audio.currentTime = (time * this.durationSong) / 100;
    this.isPlayingAudio = false;
  }

  floatToInteger(num: number) {
    return Math.ceil(num);
  }

  ngOnDestroy(): void {
    this.audio.volume = 0;
    this.audio.pause();
    this.onDestroy$.next(true);
  }
}
