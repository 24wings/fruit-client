import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
// import {} from ''

@Component({
  selector: 'app-fruit-client-main-page',
  templateUrl: './fruit-client-main-page.component.html',
  styleUrls: ['./fruit-client-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FruitClientMainPageComponent implements OnInit {
  @Output() onRefershOrder = new EventEmitter()
  @Output() onThemeChange = new EventEmitter();
  search() { }
  constructor() { }

  ngOnInit() {
  }
  refershOrder() {
    this.onRefershOrder.emit(true);
  }
  themeChange($event) {
    this.onThemeChange.emit($event);
  }

}
