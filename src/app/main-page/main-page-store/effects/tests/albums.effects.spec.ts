import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/main-page/services/album.service';

import { AlbumsEffects } from '../albums.effects';

describe('AlbumsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: AlbumsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumsEffects, AlbumService, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AlbumsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
