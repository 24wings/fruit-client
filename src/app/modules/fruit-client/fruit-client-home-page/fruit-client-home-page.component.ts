import { Component, OnInit } from '@angular/core';
import { FruitClientService } from '../fruit-client.service';
@Component({
  selector: 'app-fruit-client-home-page',
  templateUrl: './fruit-client-home-page.component.html',
  styleUrls: ['./fruit-client-home-page.component.css']
})
export class FruitClientHomePageComponent implements OnInit {
  products: FruitProduct[] = [];
  groups: FruitProductGroup[] = []
  constructor(public fruitClient: FruitClientService) { }
  ngOnInit() {
    this.listRecommandProductsAndGroups();
  }

  async listRecommandProductsAndGroups() {
    this.products = await this.fruitClient.listRecommandProducts();
    this.groups = await this.fruitClient.listRecommandGroups();
  }

}

