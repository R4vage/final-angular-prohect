import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { By } from '@angular/platform-browser';
import { SecondTrackMusicPipe } from '../../pipes/second-track-music.pipe';
import { AudioPlayerComponent } from './audio-player.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;
  let el: DebugElement;
  let loader: HarnessLoader;

  const MUSIC_URL = 'https://p.scdn.co/mp3-preview/753b3d84774ae1a257bbd4fb114d0a33db06c83e?cid=1a742ee646b74af4a2a648a825f35326';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [AudioPlayerComponent, SecondTrackMusicPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPlayerComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    loader = TestbedHarnessEnvironment.loader(fixture);

    component.musicURL = MUSIC_URL;

    fixture.detectChanges();
    fixture.whenStable();

    component.audio.volume = 0;

    spyOn(component, 'playAudio').and.callThrough();
    spyOn(component, 'volumeManager').and.callThrough();
    spyOn(component, 'muteMusic').and.callThrough();
    spyOn(component, 'currentTimeManager').and.callThrough();
    spyOn(component.audio, 'play').and.callFake(() => Promise.resolve());
    spyOn(component.audio, 'pause').and.callFake(() => Promise.resolve());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with music', () => {
    const audioTest = new Audio(MUSIC_URL);
    expect(component.audio).toEqual(audioTest);
  });

  it('should play audio when clicked play button', async () => {
    expect(component.isPlayingAudio).toBe(false);

    const playButton = await loader.getHarnessOrNull(MatButtonHarness);

    expect(playButton).toBeTruthy();
    await playButton?.click();

    expect(component.playAudio).toHaveBeenCalled();
    expect(component.audio.play).toHaveBeenCalled();
    expect(component.isPlayingAudio).toBe(true);
  });

  it('should stop playing audio when clickek play button twice', async () => {
    expect(component.isPlayingAudio).toBe(false);

    const playButton = await loader.getHarnessOrNull(MatButtonHarness);

    expect(playButton).toBeTruthy();
    await playButton?.click();
    expect(component.isPlayingAudio).toBe(true);

    await playButton?.click();

    expect(component.playAudio).toHaveBeenCalledTimes(2);
    expect(component.audio.play).toHaveBeenCalled();
    expect(component.audio.pause).toHaveBeenCalled();
    expect(component.isPlayingAudio).toBe(false);
  });

  it('should change volume when slider is used', async () => {
    const volumeSliderMaterial = await loader.getHarnessOrNull(MatSliderHarness.with({ selector: '.volume-bar' }));

    expect(volumeSliderMaterial).toBeTruthy();

    await volumeSliderMaterial?.setValue(60);
    expect(await volumeSliderMaterial?.getValue()).toBe(60);
    fixture.detectChanges();

    expect(component.volumeManager).toHaveBeenCalled();
    expect(component.audio.volume).toBe(0.6);
  });

  it('should mute music when mute button is pressed', async () => {
    expect(component.isPlayingAudio).toBe(false);
    component.audio.volume = 1;

    const muteButton = await loader.getHarnessOrNull(MatButtonHarness.with({ selector: '.mute-button' }));

    expect(muteButton).toBeTruthy();
    await muteButton?.click();

    expect(component.muteMusic).toHaveBeenCalled();
    expect(component.audio.volume).toBe(0);
    expect(component.volumeValueSlider).toBe(0);
    expect(component.isMuted).toEqual({
      check: true,
      previousValue: 100,
    });
  });

  it('should unmute music when mute button is pressed twice', async () => {
    expect(component.isPlayingAudio).toBe(false);
    component.audio.volume = 1;

    const muteButton = await loader.getHarnessOrNull(MatButtonHarness.with({ selector: '.mute-button' }));

    expect(muteButton).toBeTruthy();
    await muteButton?.click();
    expect(component.volumeValueSlider).toBe(0);
    await muteButton?.click();

    expect(component.muteMusic).toHaveBeenCalledTimes(2);
    expect(component.audio.volume).toBe(1);
    expect(component.volumeValueSlider).toBe(100);
    expect(component.isMuted).toEqual({
      check: false,
      previousValue: 0,
    });
  });

  it("should change music's current time when changed corresponding slider", async () => {
    component.durationSong = 30;
    const currentSliderMaterial = await loader.getHarness(MatSliderHarness.with({ selector: '.current-time-slider' }));

    expect(currentSliderMaterial).toBeTruthy();

    await currentSliderMaterial.setValue(10);

    fixture.detectChanges();

    expect(component.currentTimeManager).toHaveBeenCalled();
    expect(component.audio.pause).toHaveBeenCalled();
    expect(component.audio.currentTime).toBe((10 * component.durationSong) / 100);
    expect(component.isPlayingAudio).toBeFalse();
  });

  it('should display correct time on DOM', () => {
    component.durationSong = 30;
    component.currentTime = 10;

    fixture.detectChanges();

    const timeIndicator = el.query(By.css('.time-music'));

    expect(timeIndicator).toBeTruthy();
    expect(timeIndicator.nativeElement.textContent).toBe('00:10/00:30');
  });

  it('should approximate float to the smallest integer above it', () => {
    for (let i = 0; i <= 1; i += 0.1) {
      if (i === 0) {
        expect(component.floatToInteger(i)).toBe(0);
      } else {
        expect(component.floatToInteger(i)).toBe(1);
      }
    }
  });

  it('should destroy correctly the component', () => {
    component.audio.volume = 1;
    let observable: unknown;
    component.onDestroy$.subscribe({
      next: (next) => {
        observable = next;
      },
    });

    expect(component.audio.volume).toBe(1);
    expect(component.audio.pause).not.toHaveBeenCalled();
    expect(observable).toBeUndefined();

    component.ngOnDestroy();

    expect(component.audio.volume).toBe(0);
    expect(component.audio.pause).toHaveBeenCalled();
    expect(observable).toBeTrue();
  });

  afterEach(() => {
    component.audio.volume = 0;
    component.audio.pause();
  });
});
