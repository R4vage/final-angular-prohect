import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { ArtistCardComponent } from './artist-card.component';

describe('Artist Card Component', () => {
  let component: ArtistCardComponent;
  let fixture: ComponentFixture<ArtistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ArtistCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistCardComponent);
    component = fixture.componentInstance;
    component.artist = {
      external_urls: {
        spotify: 'url',
      },
      href: 'example.com',
      id: '0',
      name: 'The artist test',
      type: '',
      uri: '',
      images: [
        {
          height: 0,
          url: 'test.com.ll',
          width: 0,
        },
      ],
    };
    component.isLiked = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
