import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlexComponent } from './card-flex.component';

describe('CardFlexComponent', () => {
  let component: CardFlexComponent;
  let fixture: ComponentFixture<CardFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
