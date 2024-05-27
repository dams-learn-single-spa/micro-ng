import { Component } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'micro-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'micro-service-angular';

  props: any;
  constructor() {
    singleSpaPropsSubject.subscribe((singleSpaProps) => {
      this.props = singleSpaProps
    })
  }

  addButton() {
    this.props.eventBus.emit({name: 'add-count', data: true})
  }

  subButton() {
    this.props.eventBus.emit({name: 'sub-count', data: true})
  }
}
