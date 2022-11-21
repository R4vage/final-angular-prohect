import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatIconHarness } from '@angular/material/icon/testing';
import { MatListHarness, MatListItemHarness } from '@angular/material/list/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../../shared.module';

import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let loader: HarnessLoader;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [SideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button with the letter A', async () => {
    const button = await loader.getHarnessOrNull(
      MatButtonHarness.with({
        text: 'A',
      })
    );
    expect(button).toBeTruthy();
  });

  it('should show the correct number of sections', async () => {
    const sectionList = await loader.getHarnessOrNull(MatListHarness);
    const sections = await sectionList?.getItems();

    expect(sections).toBeTruthy();
    expect(sections?.length).toBe(2);
  });

  it('should show a button with a label', async () => {
    const sectionList = await loader.getHarnessOrNull(MatListHarness);
    const sections = await sectionList?.getItems();

    expect(sections).toBeTruthy();
    (sections as MatListItemHarness[]).forEach(async (sectionItem, index) => {
      const sectionButton = await sectionItem.getHarnessOrNull(MatButtonHarness);
      const sectionIcon = await sectionButton?.getHarnessOrNull(MatIconHarness);

      expect(sectionItem).toBeTruthy();
      expect(sectionButton).toBeTruthy();
      expect(sectionIcon).toBeTruthy();

      expect(await sectionIcon?.getName()).toBe(`${component.sections[index].icon}`);
      expect(await sectionButton?.getText()).toBe(`${component.sections[index].icon} ${component.sections[index].label}`);
    });
  });
});
