import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FruitClientService } from '../fruit-client.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products: FruitProduct[] = [];
  @Output() onRefershOrder = new EventEmitter();
  constructor(public fruitClient: FruitClientService) {
    // this.fruitClient.refershShopingCar$.subscribe(() => this.listProducts())
  }

  refershOrder() {
    this.onRefershOrder.emit(true);
  }
  ngOnInit() {
    let adminId = this.fruitClient.route.snapshot.queryParams.shop;
    if (adminId) this.fruitClient.adminId = adminId;
    this.listProducts();
  }

  async listProducts() {
    this.products = await this.fruitClient.listRecommandProducts();
  }

}
