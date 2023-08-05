import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-collapse-horizontal',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './horizontal-collapse.component.html',
})
export class MyComponent {
  public isCollapsed = true;
}
