import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-flex',
  template: `
    <section class="section">
      <h2>{{name}}</h2>
<<<<<<< HEAD
      <div class="cards">
        <ng-content select=".card"></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./card-flex.component.scss'],
=======
      <ng-content select=".cards"></ng-content>
    </section>
  `,
>>>>>>> 4ee285e (Track and Artist Card, shared flex for display)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFlexComponent{
  @Input() name!:string;
}
