import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {

}
