import { Component, OnInit } from '@angular/core';
import { FruitClientService } from '../fruit-client.service';
@Component({
  selector: 'app-fruit-client-product-groups-page',
  templateUrl: './fruit-client-product-groups-page.component.html',
  styleUrls: ['./fruit-client-product-groups-page.component.css']
})
export class FruitClientProductGroupsPageComponent implements OnInit {

  groups: FruitProductGroup[] = [];
  products: FruitProduct[] = [];
  selectedProductGroup: FruitProductGroup;

  constructor(public fruitClient: FruitClientService) { }
  refershProducts($event: { group: FruitProductGroup, products: FruitProduct[] }) {
    {
      this.products = $event.products;
    }
  }
  async ngOnInit() {

  }



}
