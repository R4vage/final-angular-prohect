import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { SharedModule } from '../../shared.module';

import { NavBarComponent } from './nav-bar.component';

@Component({
  template: `
    <app-nav-bar>
      <div>Some content to show</div>
    </app-nav-bar>
  `,
})
class TestComponent {}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let el: DebugElement;

  let testEl: DebugElement;
  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;

  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [NavBarComponent, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    testFixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    testEl = testFixture.debugElement;

    loader = TestbedHarnessEnvironment.loader(testFixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-toolbar', async () => {
    const matToolBar = await loader.getHarness(MatToolbarHarness);
    expect(matToolBar).toBeTruthy();
  });

  it("should contain 'Some content to show'", async () => {
    const matToolBar = await loader.getHarness(MatToolbarHarness);
    const row = await matToolBar.getRowsAsText();
    expect(row[0]).toContain('Some content to show');
  });
});
