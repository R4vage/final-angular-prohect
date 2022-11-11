import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-flex',
  template: `
    <section class="section">
      <h2>{{name}}</h2>
      <ng-content select=".cards"></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFlexComponent{
  @Input() name!:string;
}
