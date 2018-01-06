import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() closed = false;
  public routes = [
    { link: 'search', icon: 'fa fa-music', label: '历史记录' },
    { link: '/user', icon: 'fa fa-heart', label: 'My Profile' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
