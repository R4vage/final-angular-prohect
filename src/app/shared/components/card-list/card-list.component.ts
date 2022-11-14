import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <section class="section">
      <ng-content select="h2"></ng-content>

      <ng-content select=".cards"></ng-content>
    </section>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  constructor() {}
}
