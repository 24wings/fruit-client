import { Component, OnInit } from '@angular/core';
import { FruitClientService } from '../fruit-client.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-fruit-client-product-detail-page',
  templateUrl: './fruit-client-product-detail-page.component.html',
  styleUrls: ['./fruit-client-product-detail-page.component.css']
})
export class FruitClientProductDetailPageComponent implements OnInit {
  product: FruitProduct;
  orderNum: number = 0;
  bsRef: BsModalRef;
  constructor(public fruitClient: FruitClientService, public modalService: BsModalService) { }

  async ngOnInit() {
    let productId = this.fruitClient.route.snapshot.queryParams.productId;
    this.product = await this.fruitClient.getProductById(productId);
  }

  async submitOrder() {
    if (this.orderNum < 0) {
      alert('至少一件商品');
    } else {
      let result = await this.fruitClient.orderProduct(this.product._id);
      if (result) {

      }
    }
  }
  async showConfirmModal(template: any) {
    this.bsRef = await this.modalService.show(template);
  }

  async addShopCard(template) {
    this.bsRef = await this.modalService.show(template);

  }
  async showRemindModal() {

  }
  goShopingCar() {
    this.fruitClient.router.navigateByUrl('/fruit-client/shoping-car');
  }

}
