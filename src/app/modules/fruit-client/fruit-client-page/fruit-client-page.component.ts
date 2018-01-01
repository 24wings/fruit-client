import { Component, OnInit } from '@angular/core';
import {FruitClientService} from '../fruit-client.service';

@Component({
  selector: 'app-fruit-client-page',
  templateUrl: './fruit-client-page.component.html',
  styleUrls: ['./fruit-client-page.component.css']
})
export class FruitClientPageComponent implements OnInit {

  groups:FruitProductGroup[]=[];
  adminId:string='';
  user:FruitUser;
    
  constructor(public fruitClient:FruitClientService) { }

  async ngOnInit() {
    let adminId =this.fruitClient.route.snapshot.queryParams.adminId;
    this.fruitClient.adminId=adminId;
    console.log(this.fruitClient.adminId);
    await this.listRecommandProducts();
    

  }
  async listRecommandProducts(){{
   this.groups = await this.fruitClient.listRecommandGroups();
  }}

  logout(){
    localStorage.clear();
    this.fruitClient.router.navigateByUrl('/fruit-client/signin')
  }

}
