import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ec-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationLayoutComponent {
}
