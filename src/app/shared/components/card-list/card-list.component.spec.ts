import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared.module';

import { CardListComponent } from './card-list.component';

@Component({
  template: `
    <app-card-list>
      <h2 highlight="yellow" class="title test-css-class">Track title</h2>
      <div class="cards content-test-css">test content</div>
      <div class="should-not-class">Should not appear in component</div>
    </app-card-list>
  `,
})
class TestComponent {}

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let el: DebugElement;
  let testEl: DebugElement;
  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardListComponent, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    testFixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testComponent = fixture.componentInstance;

    el = fixture.debugElement;
    testEl = testFixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain track title and test content', () => {
    const section = testEl.query(By.css('.section'));
    const title = testEl.query(By.css('.test-css-class'));
    const content = testEl.query(By.css('.content-test-css'));

    expect(section).toBeTruthy();

    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toBe('Track title');

    expect(content).toBeTruthy();
    expect(content.nativeElement.textContent).toBe('test content');
  });

  it("should not containt div with class 'should-not-class' ", () => {
    const section = testEl.query(By.css('.section'));
    const shouldNotExist = testEl.query(By.css('.should-not-class'));

    expect(section).toBeTruthy();
    expect(shouldNotExist).toBeNull();
  });
});
