import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <mat-toolbar
      class=" bg-gray-800 shadow-lg drop-shadow-md shadow-slate-800/40"
    >
      <span span class="title">Web page</span>
      <app-search-bar></app-search-bar>
      <ng-content> </ng-content>
    </mat-toolbar>
  `,
  styleUrls: ['./nav-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  constructor() {}
}
