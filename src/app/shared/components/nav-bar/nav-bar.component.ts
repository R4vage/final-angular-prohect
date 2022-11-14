import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <mat-toolbar class="h:[64px] bg-gray-800 shadow-lg drop-shadow-md shadow-slate-800/40">
      <span span>Web page</span>
      <span class="flex-auto"></span>
      <ng-content> </ng-content>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  constructor() {}
}
