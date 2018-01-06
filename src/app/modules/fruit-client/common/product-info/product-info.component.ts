import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @Input() product;
  @Output() addShopingCar = new EventEmitter<FruitProduct>();
  @Output() onBuyProduct = new EventEmitter();
  showDesc: boolean = false;
  status: any = {};
  constructor() { }

  ngOnInit() {
  }

  toggle(showDesc: Boolean) {
    this.showDesc = !showDesc;
  }

  addToShopingCar() {
    this.addShopingCar.emit(this.product);
  }
  viewProductDetail() {
    console.log(this.product);
  }
  buyProduct() {
    this.onBuyProduct.emit(this.product);
    // this.
  }

}
