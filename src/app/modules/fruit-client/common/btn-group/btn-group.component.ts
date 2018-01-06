import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Themes, DEFAULT_THEME } from '../../../../app.themes';
@Component({
  selector: 'btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGroupComponent implements OnInit {
  Themes = Themes;
  selectedTheme = DEFAULT_THEME;
  // buyProduct
  @Output() onThemeChange = new EventEmitter();

  themeChange(theme) {
    this.selectedTheme = theme;
    this.onThemeChange.emit(theme);
  }
  constructor() { }

  ngOnInit() {
  }

}
