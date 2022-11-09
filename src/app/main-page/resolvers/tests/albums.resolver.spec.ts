import { TestBed } from '@angular/core/testing';

import { AlbumsResolver } from '../albums.resolver';

describe('AlbumsResolver', () => {
  let resolver: AlbumsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlbumsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
