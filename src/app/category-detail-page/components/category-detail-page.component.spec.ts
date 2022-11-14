import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { noop, Observable, of } from 'rxjs';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { CategoriesService } from 'src/app/main-page/services/categories.service';
import { MaterialModule } from 'src/app/material/material.module';
import { CardListComponent } from 'src/app/shared/components/card-list/card-list.component';
import { MusicCardComponent } from 'src/app/shared/components/music-card/music-card.component';
import { PlaylistToMusicPipe } from 'src/app/shared/pipes/playlist-to-music.pipe';
import { TitleCardTruncatePipe } from 'src/app/shared/pipes/title-card-truncate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { categoryWithPlaylists } from 'src/Test-utilities/categories-mock-data';

import { CategoryDetailPageComponent } from './category-detail-page.component';

describe('CategoryDetailPageComponent', () => {
  let component: CategoryDetailPageComponent;
  let fixture: ComponentFixture<CategoryDetailPageComponent>;
  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let categoryService: CategoriesService;
  let location: Location;

  let snackbar: MatSnackBar;

  const ID_CATEGORY = 'testParamsCategory';
  const CATEGORY = categoryWithPlaylists;
  beforeEach(async () => {
    const categoryServiceSpy = jasmine.createSpyObj(CategoriesService, ['checkSavedCategory', 'saveCategory', 'deleteCategory']);
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    categoryServiceSpy.checkSavedCategory.and.returnValue(of([true]));
    categoryServiceSpy.saveCategory.and.returnValue(of([true]));
    categoryServiceSpy.deleteCategory.and.returnValue(of([true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'category/:id', component: CategoryDetailPageComponent },
          { path: 'category', component: CategoryDetailPageComponent },
        ]),
      ],
      declarations: [CategoryDetailPageComponent, CardListComponent, MusicCardComponent, PlaylistToMusicPipe, TitleCardTruncatePipe],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },

        {
          provide: Store,
          useValue: {
            pipe(value: unknown): Observable<CategoryItem> {
              return of(CATEGORY);
            },
          },
        },
        {
          provide: CategoriesService,
          useValue: categoryServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: ID_CATEGORY,
            }),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(CategoryDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    categoryService = TestBed.inject(CategoriesService);
    snackbar = TestBed.inject(MatSnackBar);

    router.initialNavigation();
    await router.navigate(['/category', ID_CATEGORY]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/category/${ID_CATEGORY}`);
    expect(component.idCategory).toBe(ID_CATEGORY);
  });

  it('should create category information section', () => {
    const categoryInformation = el.query(By.css('.category-information'));
    expect(categoryInformation).toBeTruthy();
  });
  it("should show category's image", () => {
    const categoryImage = el.query(By.css('.image-category'));
    expect(categoryImage).toBeTruthy();
    expect(categoryImage.attributes['src']).toBe(CATEGORY.icons[0].url);
  });

  it('should display correctly the cards', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    const firstCard = cards[0];

    expect(cards.length).toBe(20);
    expect(await firstCard.getTitleText()).toBe('Radar Andinos');
  });

  it('should obtain correctly the image from the category', () => {
    const image = component.getImage(CATEGORY);

    expect(image).toBe(CATEGORY.icons[0].url);
  });
});
