
import { Component, HostBinding, OnInit } from '@angular/core';

import 'rxjs/add/operator/let';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidebarColsed: boolean = false;

  @HostBinding('class')
  style = '北极';

  constructor() {

  }

  ngOnInit() {

  }
}
