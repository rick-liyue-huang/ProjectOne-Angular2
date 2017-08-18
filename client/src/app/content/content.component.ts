import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private pageTitle: string;

  private pageDesc: string;

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/dashboard') {
          this.pageTitle = 'HomePage';
          this.pageDesc = 'This is homepage';
        } else if(event.url == '/stock') {
          this.pageTitle = 'Stock Management';
          this.pageDesc = 'Deal with this stock';
        }
      });
  }

  ngOnInit() {
  }

}










































