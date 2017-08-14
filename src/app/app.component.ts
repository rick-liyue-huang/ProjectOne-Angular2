import { Component } from '@angular/core';

//three necessary elements of component: decorator, template, controller

//decorator
@Component({
  selector: 'app-root', // selector - occupy flag
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css']
})

// controller
export class AppComponent {
  title = 'Rick Huang';
}
