import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistTracksComponent } from './playlist-trackscomponent';

describe('ListTracksComponent', () => {
  let component: PlaylistTracksComponent;
  let fixture: ComponentFixture<PlaylistTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistTracksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
