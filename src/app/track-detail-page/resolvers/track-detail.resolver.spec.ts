import { TestBed } from '@angular/core/testing';

import { TrackDetailResolver } from './track-detail.resolver';

describe('TrackDetailResolver', () => {
  let resolver: TrackDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TrackDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
