import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FruitClientService } from '../../../modules/fruit-client/fruit-client.service';
import { flyInOut, fadeInAnimation, flyOut } from '../../../modules/fruit-client/animations/fade-in.animation';
import { FruitOrderState } from '../../../modules/fruit-client/enum';

@Component({
  selector: 'app-shopinglist-view',
  templateUrl: './shopinglist-view.component.html',
  styleUrls: ['./shopinglist-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [flyInOut, flyOut, fadeInAnimation]
})
export class ShopinglistViewComponent implements OnInit {
  @Input() orderState: FruitOrderState;
  shopingCarOrders: any[] = []
  constructor(public fruitClient: FruitClientService) {

  }

  ngOnInit() {
    this.fruitClient.refershShopingCar$.subscribe(() => {
      console.log('refershj')
      this.listOrders();
    });
    this.listOrders();
  }
  async listOrders() {
    switch (this.orderState) {
      case FruitOrderState.UnConfirm:
        this.shopingCarOrders = await this.fruitClient.getUserShopingCarOrders();
        break;
      case FruitOrderState.SendProduct:
        this.shopingCarOrders = await this.fruitClient.getOldOrders();
        break;
      case FruitOrderState.Finish:
        this.shopingCarOrders = await this.fruitClient.getOldOrders();
        break;
    }

  }



}
