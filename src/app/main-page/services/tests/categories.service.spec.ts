import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Categories } from 'src/app/core/models/categories.models';
import { categoriesMockData } from 'src/Test-utilities/categories-mock-data';

import { CategoriesService } from '../categories.service';

describe('CategoriesService', () => {
  let categoryService: CategoriesService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

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
    const queryParameters = categoryService.getQueryParametersAvailableCategories();
    expect(queryParameters.get('limit')).toBe('20');
    expect(queryParameters.get('offset')).toBe('0');
  });

  it('should get query parameters with limit = 10 and offset = 2', () => {
    const queryParameters = categoryService.getQueryParametersAvailableCategories(10, 2);
    expect(queryParameters.get('limit')).toBe('10');
    expect(queryParameters.get('offset')).toBe('2');
  });

  it('should give default query parameters when given incorrect values', () => {
    const incorrectQueryParameters = categoryService.getQueryParametersAvailableCategories(100, 3);
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
    const req = httpTestingController.expectOne(`${categoryService.URL}/browse/categories?Content-Type=application/json&limit=20&offset=0`);

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

    categoryService.getAvailableCategories(categories.limit, categories.offset).subscribe({
      next: (categoriesData) => {
        expect(categoriesData).toBeTruthy();
        expect(categoriesData).toEqual(categories);
      },
    });
    const req = httpTestingController.expectOne(`${categoryService.URL}/browse/categories?Content-Type=application/json&limit=${categories.limit}&offset=${categories.offset}`);

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe(`${categories.limit}`);
    expect(req.request.params.get('offset')).toBe(`${categories.offset}`);

    req.flush({ categories });

    expect(categoryService.getAvailableCategories).toHaveBeenCalledTimes(1);
  });
});
