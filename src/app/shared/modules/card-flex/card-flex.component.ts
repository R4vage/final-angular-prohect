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
>>>>>>> 4ee285eb3caa31b427bcd630fa33555da358548c
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFlexComponent{
  @Input() name!:string;
}
