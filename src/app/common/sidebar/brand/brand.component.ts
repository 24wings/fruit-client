import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Output() onToggleSidebar = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar() {
    this.onToggleSidebar.emit(true);
  }



}
