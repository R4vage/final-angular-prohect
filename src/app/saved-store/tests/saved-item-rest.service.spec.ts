import { TestBed } from '@angular/core/testing';

import { SavedItemRestService } from '../saved-item-rest.service';

describe('SavedItemRestService', () => {
  let service: SavedItemRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedItemRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
