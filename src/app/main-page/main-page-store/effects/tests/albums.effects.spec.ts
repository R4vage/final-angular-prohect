import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/main-page/services/album.service';

import { AlbumsEffects } from '../albums.effects';

describe('AlbumsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: AlbumsEffects;
  let snackbar: MatSnackBar;
  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AlbumsEffects, 
        AlbumService, 
        provideMockActions(() => actions$), 
        provideMockStore(),
        {provide: MatSnackBar, useValue: snackbarSpy}
      ],
    });

    effects = TestBed.inject(AlbumsEffects);
  
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
