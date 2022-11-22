import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { userMock } from 'src/Test-utilities/user-profile-mock-data';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.user = userMock;
    debug = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display information properly', () => {
    let image = debug.query(By.css('img'));
    let title = debug.query(By.css('h1'));
    let subTitle = debug.queryAll(By.css('h3'))[1];
    expect(image.nativeElement.src).toContain(userMock.images[0].url.slice(1));
    expect(title.nativeElement.textContent).toBe(userMock.display_name);
    expect(subTitle.nativeElement.textContent).toBe(userMock.country);
  });
});
