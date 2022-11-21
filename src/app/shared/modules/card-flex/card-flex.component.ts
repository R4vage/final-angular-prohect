import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-flex',
  template: `
    <section class="section">
      <h2>{{ name }}</h2>
      <div class="cards">
        <ng-content select=".card"></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./card-flex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFlexComponent {
  @Input() name!: string;
}
