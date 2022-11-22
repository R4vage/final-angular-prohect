import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CardFlexComponent } from 'src/app/shared/modules/card-flex/card-flex.component';
import { AlbumCardComponentMock } from 'src/Test-utilities/mockedComponents/album-card-mock.component';
import { TrackCardComponentMock } from 'src/Test-utilities/mockedComponents/track-card-mock.component';
import {
  savedTracksStoreMock,
  topUserAlbumsStoreMock,
} from 'src/Test-utilities/store-mocks-data';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

import { MyMusicPageComponent } from '../my-music-page.component';
import { By } from '@angular/platform-browser';

describe('MyMusicPageComponent', () => {
  let component: MyMusicPageComponent;
  let fixture: ComponentFixture<MyMusicPageComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyMusicPageComponent,
        TrackCardComponentMock,
        AlbumCardComponentMock,
        CardFlexComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            topUserAlbums: topUserAlbumsStoreMock,
            savedTracks: savedTracksStoreMock,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMusicPageComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create as many cards as items in store', () => {
    const albumCards = debug.queryAll(By.css('app-album-card'));
    const trackCards = debug.queryAll(By.css('app-track-card'));
    expect(albumCards.length).toBe(topUserAlbumsStoreMock.ids.length);
    expect(trackCards.length).toBe(savedTracksStoreMock.ids.length);
  });

  it('should create two flex cards', () => {
    const flexes = debug.queryAll(By.css('app-card-flex'));
    expect(flexes.length).toBe(2);
  });

  it('should show error message if no items have been saved', () => {
    component.savedTracks$ = of([]);
    component.userAlbums$ = of([]);
    fixture.detectChanges();
    const noItemsMessage = debug.query(By.css('h3'));
    expect(noItemsMessage).toBeTruthy();
  });
});
