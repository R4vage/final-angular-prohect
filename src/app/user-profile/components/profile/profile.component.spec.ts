import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.user = {
      country: 'TE',
      display_name: 'TestUltra',
      email: 'test.me.please',
      explicit_content: {
        filter_enabled: false,
        filter_locked: false,
      },
      external_urls: {
        spotify: 'https://open.spotify.com/user/T3st135631234test',
      },
      followers: {
        href: null,
        total: 0,
      },
      href: 'https://api.spotify.com/v1/users/T3st135631234test',
      id: 'T3st135631234test',
      images: [],
      product: 'open',
      type: 'user',
      uri: 'spotify:user:T3st135631234test',
      userLoaded: true,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
