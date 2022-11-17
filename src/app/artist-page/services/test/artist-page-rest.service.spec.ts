import { TestBed } from '@angular/core/testing';
import { ArtistPageRestService } from '../artist-page-rest.service';

describe('ArtistPageRestService', () => {
  let service: ArtistPageRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistPageRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
