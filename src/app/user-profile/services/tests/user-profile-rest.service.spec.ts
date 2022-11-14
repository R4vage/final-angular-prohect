import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserProfileRestService } from '../user-profile-rest.service';

describe('UserProfileRestService', () => {
  let service: UserProfileRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserProfileRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
