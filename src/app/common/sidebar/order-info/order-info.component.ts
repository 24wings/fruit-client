import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FruitClientService } from '../../../modules/fruit-client/fruit-client.service';
import { FruitOrderState } from '../../../modules/fruit-client/enum';
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  FruitOrderState = FruitOrderState;
  @Input() order: FruitOrder;
  @Input() index: number;
  @Output() onRefersh = new EventEmitter<boolean>();
  displayInfo: boolean = false;

  toggleInfo() {
    this.displayInfo = !this.displayInfo;
  }
  async remove() {
    await this.fruitClient.removeOrder(this.order._id);
    this.onRefersh.emit(true);
  }
  constructor(public fruitClient: FruitClientService) { }

  ngOnInit() {
  }

  async confirmOrder() {
    await this.fruitClient.confirmOrder(this.order._id, this.order.num);
    this.onRefersh.emit(true);
  }

}
