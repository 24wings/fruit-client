import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FruitOrderState } from '../../modules/fruit-client/enum';
import { ShopinglistViewComponent } from './shopinglist-view/shopinglist-view.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onToggleSidebar = new EventEmitter();
  FruitOrderState = FruitOrderState;
  sidebarCollapsed: boolean = false;
  @Input() closed = false;
  @ViewChild('listView') listView: ShopinglistViewComponent;
  public routes = [
    { link: 'oldOrder', icon: 'fa fa-music', label: '历史清单' },
    { link: 'sendingProduct', icon: 'fa fa-heart', label: '正在发货' },
    { link: 'shopingCar', icon: 'fa fa-heart', label: '购物车' }
  ];
  selectedRoute: { link: string, icon: string, label: string } = this.routes[2];
  constructor() { }

  ngOnInit() {
  }
  refershOrders() {
    console.log('refersh orders');
    this.listView.listOrders()
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.onToggleSidebar.emit(true)

  }
  selectRoute(route) {
    this.selectedRoute = route;
  }




}
