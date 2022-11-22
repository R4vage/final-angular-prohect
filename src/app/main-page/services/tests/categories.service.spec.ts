import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Categories } from 'src/app/core/models/categories.models';
import { Playlists } from 'src/app/core/models/playlist.models';
import {
  categoriesMockData,
  categoryWithPlaylists,
} from 'src/Test-utilities/categories-mock-data';

import { CategoriesService } from '../categories.service';

describe('CategoriesService', () => {
  let categoryService: CategoriesService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const CATEGORY = categoryWithPlaylists;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    categoryService = TestBed.inject(CategoriesService);

    spyOn(categoryService, 'getAvailableCategories').and.callThrough();
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  it('should get query parameters with default values', () => {
    const queryParameters =
      categoryService.getQueryParametersAvailableCategories();
    expect(queryParameters.get('limit')).toBe('20');
    expect(queryParameters.get('offset')).toBe('0');
  });

  it('should get query parameters with limit = 10 and offset = 2', () => {
    const queryParameters =
      categoryService.getQueryParametersAvailableCategories(10, 2);
    expect(queryParameters.get('limit')).toBe('10');
    expect(queryParameters.get('offset')).toBe('2');
  });

  it('should give default query parameters when given incorrect values', () => {
    const incorrectQueryParameters =
      categoryService.getQueryParametersAvailableCategories(100, 3);
    expect(incorrectQueryParameters.get('limit')).toBe('20');
    expect(incorrectQueryParameters.get('offset')).toBe('0');
  });

  it('should get category releases with default values', () => {
    const categories: Categories = {
      href: 'test.com',
      items: categoriesMockData,
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 100,
    };

    categoryService.getAvailableCategories().subscribe({
      next: (categoriesData) => {
        expect(categoriesData).toBeTruthy();
        expect(categoriesData).toEqual(categories);
      },
    });
    const req = httpTestingController.expectOne(
      `${categoryService.URL}/browse/categories?Content-Type=application/json&limit=20&offset=0`
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe('20');
    expect(req.request.params.get('offset')).toBe('0');

    req.flush({ categories });

    expect(categoryService.getAvailableCategories).toHaveBeenCalledTimes(1);
  });

  it('should get category releases with specified query parameters', () => {
    const categories: Categories = {
      href: 'test.com',
      items: categoriesMockData,
      limit: 50,
      next: null,
      offset: 2,
      previous: null,
      total: 100,
    };

    categoryService
      .getAvailableCategories(categories.limit, categories.offset)
      .subscribe({
        next: (categoriesData) => {
          expect(categoriesData).toBeTruthy();
          expect(categoriesData).toEqual(categories);
        },
      });
    const req = httpTestingController.expectOne(
      `${categoryService.URL}/browse/categories?Content-Type=application/json&limit=${categories.limit}&offset=${categories.offset}`
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe(`${categories.limit}`);
    expect(req.request.params.get('offset')).toBe(`${categories.offset}`);

    req.flush({ categories });

    expect(categoryService.getAvailableCategories).toHaveBeenCalledTimes(1);
  });

  it("should get category's playlists", () => {
    spyOn(categoryService, 'getCategoryPlaylists').and.callThrough();

    categoryService.getCategoryPlaylists(CATEGORY.id).subscribe({
      next: (category) => {
        expect(category).toBeTruthy();
        expect(category.playlists).toEqual(CATEGORY.playlists as Playlists);
      },
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(
      `${categoryService.URL}/browse/categories/${CATEGORY.id}`
    );

    expect(req.request.method).toBe('GET');

    req.flush({ ...CATEGORY, playlists: {} });

    expect(categoryService.getCategoryPlaylists).toHaveBeenCalledTimes(1);

    const secondReq = httpTestingController.expectOne(
      `${categoryService.URL}/browse/categories/${CATEGORY.id}/playlists?Content-Type=application/json&limit=20&offset=0`
    );

    expect(req.request.method).toBe('GET');

    secondReq.flush({ playlists: CATEGORY.playlists as Playlists });
  });

  it('should fail when server gives an error while trying to get a album by id', () => {
    spyOn(categoryService, 'getCategoryPlaylists').and.callThrough();

    categoryService.getCategoryPlaylists(CATEGORY.id).subscribe({
      next: () => {
        fail('Expected to fail');
      },
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        const err: HttpErrorResponse = error;
        expect(err.status).toBe(401);
        expect(err.message).toBe(
          `Http failure response for ${categoryService.URL}/browse/categories/${CATEGORY.id}: ${err.status} Failed`
        );
        expect(err.statusText).toBe('Failed');
      },
    });
    const req = httpTestingController.expectOne(
      `${categoryService.URL}/browse/categories/${CATEGORY.id}`
    );

    expect(req.request.method).toBe('GET');

    req.flush('Test error', { status: 401, statusText: 'Failed' });

    expect(categoryService.getCategoryPlaylists).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
