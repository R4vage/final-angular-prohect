import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatIconHarness } from '@angular/material/icon/testing';
import { MatListHarness, MatListItemHarness } from '@angular/material/list/testing';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let loader: HarnessLoader;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [LayoutComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a side bar', async () => {
    const sidebar = await loader.getHarness(MatListHarness);
    const list = await loader.getAllHarnesses(MatListItemHarness);
    const dashboardButton = await list[0].getHarness(MatButtonHarness);
    const dashboardIcon = await dashboardButton.getHarness(MatIconHarness);
    const button = await loader.getHarness(
      MatButtonHarness.with({
        text: 'A',
      })
    );

    expect(sidebar).toBeTruthy();
    expect(await button.getText()).toBe('A');
    expect(list).toBeTruthy();
    expect(list.length).toBe(2);
    expect(await dashboardButton.getText()).toBe('home Dashboard');
    expect(dashboardIcon).toBeTruthy();
  });

  it('should create a nav bar', async () => {
    const navbar = await loader.getHarness(MatToolbarHarness);

    expect(navbar).toBeTruthy();
  });

  it('should have an Outlet element', () => {
    const divs = el.query(By.css('.grid'));
    const outlet = divs.query(By.css('.outlet-container'));
    expect(outlet).toBeTruthy();
    expect(outlet.nativeElement.innerHTML).not.toBeNull();
  });
});
