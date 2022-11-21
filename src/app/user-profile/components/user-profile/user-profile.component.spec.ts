import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { provideMockStore } from '@ngrx/store/testing';
import { CardFlexComponent } from 'src/app/shared/modules/card-flex/card-flex.component';
import { ArtistCardComponentMock } from 'src/Test-utilities/mockedComponents/artist-card-mock.component';
import { TrackCardComponentMock } from 'src/Test-utilities/mockedComponents/track-card-mock.component';
import {
  topUserArtistsStoreMock,
  tracksStoreMock,
  userStoreMock,
} from 'src/Test-utilities/store-mocks-data';
import { ProfileComponent } from '../profile/profile.component';
import { UserProfileComponent } from './user-profile.component';
import { By } from '@angular/platform-browser';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserProfileComponent,
        ArtistCardComponentMock,
        TrackCardComponentMock,
        ProfileComponent,
        CardFlexComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            user: userStoreMock,
            topUserArtists: topUserArtistsStoreMock,
            topUserTracks: tracksStoreMock,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create as many cards as items in store', () => {
    const artistCards = debug.queryAll(By.css('app-artist-card'));
    const trackCards = debug.queryAll(By.css('app-track-card'));
    expect(artistCards.length).toBe(topUserArtistsStoreMock.ids.length);
    expect(trackCards.length).toBe(tracksStoreMock.ids.length);
  });

  it('should create a profile',()=>{
    const profile = debug.query(By.css('app-profile'));
    expect(profile).toBeTruthy();
  })
});
