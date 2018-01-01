import { Component, OnInit } from '@angular/core';
import { FruitClientService } from '../fruit-client.service';
@Component({
  selector: 'app-fruit-client-home-page',
  templateUrl: './fruit-client-home-page.component.html',
  styleUrls: ['./fruit-client-home-page.component.css']
})
export class FruitClientHomePageComponent implements OnInit {
  constructor(public fruitClient: FruitClientService) { }
  ngOnInit() {

  }

  async listRecommandProducts() {
    await this.fruitClient.listRecommandGroups
  }

}

