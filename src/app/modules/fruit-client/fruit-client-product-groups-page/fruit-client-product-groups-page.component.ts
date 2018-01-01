import { Component, OnInit } from '@angular/core';
import {FruitClientService} from '../fruit-client.service';
@Component({
  selector: 'app-fruit-client-product-groups-page',
  templateUrl: './fruit-client-product-groups-page.component.html',
  styleUrls: ['./fruit-client-product-groups-page.component.css']
})
export class FruitClientProductGroupsPageComponent implements OnInit {
  
  groups:FruitProductGroup[]=[];
  products:FruitProduct[]=[];
  selectedProductGroup:FruitProductGroup;
  
  constructor(public fruitClient: FruitClientService) { 

  }

  async ngOnInit() {
    let groupId = this.fruitClient.route.snapshot.queryParams.groupId;
    if (!this.fruitClient.user) {
      this.fruitClient.router.navigateByUrl('/fruit-client/signin');
    }
    await this.listGroups();
    console.log(groupId);
    // groupId.
    if(groupId){
     let productGroup= this.groups.find(group=>group._id==groupId);
     if(productGroup){
      await this.selectProductGroup(productGroup);
     }

    }
      
  }
 async listGroups(){
  this.groups=  await this.fruitClient.listFruitGroups();
  }

  async selectProductGroup(group:FruitProductGroup){
    this.selectedProductGroup = group;
   this.products = await this.fruitClient.getGroupProducts(this.selectedProductGroup._id);

  }

}
