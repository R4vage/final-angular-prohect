import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardContent } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../../shared.module';

import { MusicCardComponent } from './music-card.component';

describe('MusicCardComponent', () => {
  let component: MusicCardComponent;
  let fixture: ComponentFixture<MusicCardComponent>;
  let loader: HarnessLoader;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule, NoopAnimationsModule],
      declarations: [MusicCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicCardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.musicData = {
      title: 'Title Card',
      imageUrl: 'image',
      artist: 'Me',
      date: 'Nov 9, 2022',
      duration: '10 minutes',
      description: 'I am someone',
    };

    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', async () => {
    const card = await loader.getHarness(MatCardHarness);

    expect(await card.getTitleText()).toBe('Title Card');
  });

  it('should have image', () => {
    const img = el.query(By.css('.image-card'));

    const srcImg = img.attributes['src'];
    expect(srcImg).toBe('image');
  });

  it('should have artist', () => {
    const content = el.query(By.directive(MatCardContent));
    const artist = content.query(By.css('.artist'));

    expect(content).toBeTruthy();
    expect(artist.nativeElement.textContent).toBe(' Me ');
  });

  it('should have date and duration', () => {
    const content = el.query(By.directive(MatCardContent));
    const date = content.query(By.css('.date-duration'));

    expect(content).toBeTruthy();
    expect(date.nativeElement.textContent).toBe('Nov 9, 2022 10 minutes');
  });

  it('should have description', () => {
    const content = el.query(By.directive(MatCardContent));
    const description = content.query(By.css('.description'));

    expect(content).toBeTruthy();
    expect(description.nativeElement.textContent).toBe('I am someone');
  });
});
