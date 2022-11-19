import { TestBed } from '@angular/core/testing';

import { MyMusicPageRestService } from '../services/my-music-page-rest.service';

describe('MyMusicPageRestService', () => {
  let service: MyMusicPageRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMusicPageRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
