import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { noop, of } from 'rxjs';
import { trackMockData } from 'src/Test-utilities/track-mock-data';

import { TrackService } from './track.service';

describe('TrackService', () => {
  let trackService: TrackService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const TRACK = trackMockData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    trackService = TestBed.inject(TrackService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    spyOn(trackService, 'saveTrack').and.callThrough();
    spyOn(trackService, 'deleteTrack').and.callThrough();
  });

  it('should be created', () => {
    expect(trackService).toBeTruthy();
  });

  it('should get track', () => {
    spyOn(trackService, 'getTrack').and.callThrough();

    trackService.getTrack(TRACK.id).subscribe({
      next: (track) => {
        expect(track).toBeTruthy();
        expect(track).toEqual(TRACK);
      },
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/tracks/${TRACK.id}`);

    expect(req.request.method).toBe('GET');

    req.flush(TRACK);

    expect(trackService.getTrack).toHaveBeenCalledTimes(1);
  });

  it('should fail when server gives an error while trying to get a track', () => {
    spyOn(trackService, 'getTrack').and.callThrough();

    trackService.getTrack(TRACK.id).subscribe({
      next: (track) => {
        fail('Expected to fail');
      },
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        const err: HttpErrorResponse = error;
        expect(err.status).toBe(401);
        expect(err.message).toBe(`Http failure response for ${trackService.URL}/tracks/${TRACK.id}: ${err.status} Failed`);
        expect(err.statusText).toBe('Failed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/tracks/${TRACK.id}`);

    expect(req.request.method).toBe('GET');

    req.flush('Test error', { status: 401, statusText: 'Failed' });

    expect(trackService.getTrack).toHaveBeenCalledTimes(1);
  });

  it('should check if a track is saved', () => {
    spyOn(trackService, 'checkSavedTrack').and.callThrough();

    trackService.checkSavedTrack(TRACK.id).subscribe({
      next: (track) => {
        expect(track).toBeTruthy();
        expect(track).toEqual([true]);
      },
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/me/tracks/contains?ids=${TRACK.id}`);

    expect(req.request.method).toBe('GET');

    req.flush([true]);

    expect(trackService.checkSavedTrack).toHaveBeenCalledTimes(1);
  });

  it('should fail when server gives an error while trying to check if track is saved', () => {
    spyOn(trackService, 'checkSavedTrack').and.callThrough();

    trackService.checkSavedTrack(TRACK.id).subscribe({
      next: () => {
        fail('Expected to fail');
      },
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        const err: HttpErrorResponse = error;
        expect(err.status).toBe(401);
        expect(err.message).toBe(`Http failure response for ${trackService.URL}/me/tracks/contains?ids=${TRACK.id}: ${err.status} Failed`);
        expect(err.statusText).toBe('Failed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/me/tracks/contains?ids=${TRACK.id}`);

    expect(req.request.method).toBe('GET');

    req.flush('Test error', { status: 401, statusText: 'Failed' });

    expect(trackService.checkSavedTrack).toHaveBeenCalledTimes(1);
  });

  it('should save a track when track is not saved', () => {
    spyOn(trackService, 'checkSavedTrack').and.returnValue(of([false]));

    trackService.saveTrack(TRACK.id).subscribe({
      next: noop,
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/me/tracks?ids=${TRACK.id}`);

    expect(req.request.method).toBe('PUT');

    req.flush({});

    expect(trackService.saveTrack).toHaveBeenCalledTimes(1);
  });

  it("should return an error when trying to save track but it's already saved", () => {
    spyOn(trackService, 'checkSavedTrack').and.returnValue(of([true]));

    trackService.saveTrack(TRACK.id).subscribe({
      next: () => {
        fail('Expected to fail');
      },
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        const error: Error = err;
        expect(error.message).toBe('The track is already saved');
      },
    });
    httpTestingController.expectNone(`${trackService.URL}/me/tracks?ids=${TRACK.id}`);

    expect(trackService.saveTrack).toHaveBeenCalledTimes(1);
  });

  it('should delete a track when track is saved', () => {
    spyOn(trackService, 'checkSavedTrack').and.returnValue(of([true]));

    trackService.deleteTrack(TRACK.id).subscribe({
      next: noop,
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(`${trackService.URL}/me/tracks?ids=${TRACK.id}`);

    expect(req.request.method).toBe('DELETE');

    req.flush({});

    expect(trackService.deleteTrack).toHaveBeenCalledTimes(1);
  });

  it("should return an error when trying to delete a track but it's already deleted from User's Saved Tracks", () => {
    spyOn(trackService, 'checkSavedTrack').and.returnValue(of([false]));

    trackService.deleteTrack(TRACK.id).subscribe({
      next: () => {
        fail('Expected to fail');
      },
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        const error: Error = err;
        expect(error.message).toBe("The track wasn't in the User's Saved Tracks");
      },
    });
    httpTestingController.expectNone(`${trackService.URL}/me/tracks?ids=${TRACK.id}`);

    expect(trackService.deleteTrack).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
