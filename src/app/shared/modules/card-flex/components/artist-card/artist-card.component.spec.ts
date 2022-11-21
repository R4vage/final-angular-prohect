import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { artistMockData } from 'src/Test-utilities/artists-mock-data';
import { savedItemsMockStore } from 'src/Test-utilities/store-mocks-data';

import { ArtistCardComponent } from './artist-card.component';

describe('ArtistCardComponent', () => {
  let component: ArtistCardComponent;
  let fixture: ComponentFixture<ArtistCardComponent>;
  let store: MockStore;
  let actions: Actions;
  beforeEach(async () => {
    const actionsSpy = jasmine.createSpyObj(actions, ['pipe'])
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatTooltipModule,
        RouterTestingModule,
        MatIconModule
      ],
      declarations: [ArtistCardComponent],
      providers: [
        provideMockStore({
          initialState:{
            savedItems: savedItemsMockStore
          }
        }),
        {provide: Actions, useValue: actionsSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistCardComponent);
    actions = TestBed.inject(Actions)
    store = TestBed.inject(MockStore)
    component = fixture.componentInstance;
    component.artist = artistMockData[0]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
