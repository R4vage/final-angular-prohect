import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMusicPageComponent } from '../my-music-page.component';

describe('MyMusicPageComponent', () => {
  let component: MyMusicPageComponent;
  let fixture: ComponentFixture<MyMusicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMusicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMusicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
