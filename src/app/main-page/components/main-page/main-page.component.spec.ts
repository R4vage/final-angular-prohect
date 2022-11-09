import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AlbumItem } from 'src/app/core/models/album.models';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { PlaylistItem } from 'src/app/core/models/playlist.models';
import { SharedModule } from 'src/app/shared/shared.module';
import { albumMockData } from 'src/Test-utilities/album-mock-data';
import { categoriesMockData } from 'src/Test-utilities/categories-mock-data';
import { playlistsMockData } from 'src/Test-utilities/playlist-mock-data';
import { AlbumState } from '../../main-page-store/reducers/albums.reducer';
import { CategoryState } from '../../main-page-store/reducers/category.reducer';
import { PlaylistState } from '../../main-page-store/reducers/playlists.reducer';
import { selectAllAlbums } from '../../main-page-store/selectors/album.selectors';
import { selectAllCategories } from '../../main-page-store/selectors/category.selectors';
import { selectAllPlaylists } from '../../main-page-store/selectors/playlist.selectors';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let loader: HarnessLoader;
  let el: DebugElement;
  let store: MockStore;
  let mockSelectAllAlbums: MemoizedSelector<AlbumState, AlbumItem[]>;
  let mockSelectAllPlaylists: MemoizedSelector<PlaylistState, PlaylistItem[]>;
  let mockSelectAllCategories: MemoizedSelector<CategoryState, CategoryItem[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    store = TestBed.inject(MockStore);

    mockSelectAllAlbums = store.overrideSelector(selectAllAlbums, albumMockData);
    mockSelectAllPlaylists = store.overrideSelector(selectAllPlaylists, playlistsMockData);
    mockSelectAllCategories = store.overrideSelector(selectAllCategories, categoriesMockData);

    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an album section', () => {
    const albumSection = el.query(By.css('.album-section'));
    const albumTitle = albumSection.query(By.css('.title'));
    const cardList = albumSection.query(By.css('.cards'));
    const cards = albumSection.queryAll(By.css('.card'));

    expect(albumSection).toBeTruthy();
    expect(albumTitle).toBeTruthy();
    expect(albumTitle.nativeElement.textContent).toBe('New Album Releases');
    expect(cardList).toBeTruthy();
    expect(cards.length).toBe(5);
  });

  it('should have a featured playlist section', () => {
    const playlistSection = el.query(By.css('.playlist-section'));
    const playlistTitle = playlistSection.query(By.css('.title'));
    const cardList = playlistSection.query(By.css('.cards'));
    const cards = cardList.queryAll(By.css('.card'));

    expect(playlistSection).toBeTruthy();
    expect(playlistTitle).toBeTruthy();
    expect(playlistTitle.nativeElement.textContent).toBe('Featured Playlists');
    expect(cardList).toBeTruthy();
    expect(cards.length).toBe(5);
  });

  it('should have a category section', () => {
    const categoriesSection = el.query(By.css('.categories-section'));
    const categoriesTitle = categoriesSection.query(By.css('.title'));
    const cardList = categoriesSection.query(By.css('.cards'));
    const cards = cardList.queryAll(By.css('.card'));

    expect(categoriesSection).toBeTruthy();
    expect(categoriesTitle).toBeTruthy();
    expect(categoriesTitle.nativeElement.textContent).toBe('Categories');
    expect(cardList).toBeTruthy();
    expect(cards.length).toBe(5);
  });

  it('should display the correct elements in each section', async () => {
    expect(component.albums$).toBeTruthy();
    expect(component.availableCategories$).toBeTruthy();
    expect(component.featuredPlaylists$).toBeTruthy();

    const albumCard = await loader.getHarness(
      MatCardHarness.with({
        title: 'Siempre Blessd',
      })
    );
    const playlistCard = await loader.getHarness(
      MatCardHarness.with({
        title: 'EQUAL Colombia',
      })
    );
    const categoryCard = await loader.getHarness(
      MatCardHarness.with({
        title: 'Listas de éxito...',
      })
    );

    expect(albumCard).toBeTruthy();
    expect(playlistCard).toBeTruthy();
    expect(categoryCard).toBeTruthy();
  });
});
