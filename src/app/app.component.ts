import { Component } from '@angular/core';
import { FirmSummaryViewModel } from './test-model.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-vsc';

  constructor() {
    const newModel: FirmSummaryViewModel = new FirmSummaryViewModel();
    console.log(newModel);
  }

}
