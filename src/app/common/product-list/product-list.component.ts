import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { fadeInAnimation } from '../../modules/fruit-client/animations';
import { FruitClientService } from '../../modules/fruit-client/fruit-client.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [fadeInAnimation]
})
export class ProductListComponent implements OnInit {
  selectedProduct: FruitProduct;
  @Output() onRefershOrder = new EventEmitter();
  // @ViewChild('loginTemplate') loginTemplate;
  @Input() products: any[] = [];
  buyNum: number = 1;
  errorMsg: string = '';
  modalRef: BsModalRef;


  refershOrder() {
    this.onRefershOrder.emit(true);
  }

  async addShopingCar() {
    if (this.isUserLogin) {
      await this.fruitClient.orderProduct(this.selectedProduct._id, this.buyNum);
      this.modalRef.hide();
    }
    // this.fruitClient.refershShopingCar(new Date().toLocaleDateString());
    await this.refershOrder();
    // this.fruitClient.orderProduct($event._id, 1);
  }
  get isUserLogin() {
    return !!this.fruitClient.user;
  }
  user = {
    phone: '',
    password: ''
  }
  constructor(public fruitClient: FruitClientService, public bsModelService: BsModalService) { }

  showLoginModel(loginTemplate) {
    this.modalRef = this.bsModelService.show(loginTemplate);
  }


  async userLogin() {
    let user = await this.fruitClient.userLogin(this.user.phone, this.user.password);
    if (user) {
      this.fruitClient.user = user;
      this.modalRef.hide();
    } else {
      this.errorMsg = '用户名或密码错误';
    }
  }

  ngOnInit() {
  }
  async buyProduct() {
    await this.fruitClient.buyProduct(this.selectedProduct._id, this.buyNum);
    this.modalRef.hide();
    // await this.fruitClient.refershShopingCar(new Date().toLocaleDateString());
    this.refershOrder();
  }
  showModel(template) {
    this.modalRef = this.bsModelService.show(template);
  }

}
