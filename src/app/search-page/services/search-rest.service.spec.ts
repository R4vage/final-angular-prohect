import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { resultsMockData } from 'src/Test-utilities/results-mock-data';

import { SearchRestService } from './search-rest.service';

describe('SearchRestService', () => {
  let service: SearchRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchRestService],
    });
    service = TestBed.inject(SearchRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should prepare the correct request for a search', () => {
    spyOn(service, 'searchItem').and.callThrough();
    service.searchItem('mock').subscribe((results) => {
      expect(results).toBe(resultsMockData);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/search?q=mock&type=track%2Cartist%2Calbum%2Cplaylist&limit=10'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(resultsMockData);
    expect(service.searchItem).toHaveBeenCalledOnceWith('mock');
  });
});
