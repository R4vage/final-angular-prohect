import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NavData } from 'src/app/core/models/nav-data.models';
import { SidenavToggle } from 'src/app/core/models/sidenav-toggle';
import { sideNavData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  sections: NavData[] = sideNavData;
  constructor() {}

  ngOnInit(): void {}
}
