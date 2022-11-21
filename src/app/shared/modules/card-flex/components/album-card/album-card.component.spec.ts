import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { AlbumService } from 'src/app/main-page/services/album.service';
import { albumMockData } from 'src/Test-utilities/album-mock-data';
import { savedItemsMockStore, topUserAlbumsStoreMock } from 'src/Test-utilities/store-mocks-data';

import { AlbumCardComponent } from './album-card.component';

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;
  let actions: Actions;
  let albumService: AlbumService;

  beforeEach(async () => {
    const actionsSpy = jasmine.createSpyObj(actions, ['pipe']);
    const albumServiceSpy = jasmine.createSpyObj(albumService, ['changeAlbumState'])

    await TestBed.configureTestingModule({
      declarations: [ AlbumCardComponent ],
      imports: [
        MatCardModule,
        MatTooltipModule,
        RouterTestingModule,
        MatIconModule
      ],
      providers: [
        provideMockStore({
          initialState:{
            savedItems: savedItemsMockStore,
            topUserAlbums: topUserAlbumsStoreMock
          }
        }),
        {provide: Actions, useValue: actionsSpy},
        {provide: AlbumService, useValue: albumServiceSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCardComponent);
    albumService = TestBed.inject(AlbumService);
    component = fixture.componentInstance;
    component.album = albumMockData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
