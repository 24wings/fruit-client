import { Injectable } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import {ApiService } from '../../lib';
@Injectable()
export class FruitClientService {
  private listRecommandGroupsApi='/fruit-client.listRecommandGroups.get';
  private fruitUserLoginApi ='/fruit-client.userLogin.post';
  private listFruitGroupsApi='/fruit-client.listGroups.get';
  private getGroupProductsApi = '/fruit-client.getGroupProducts.get';
  adminId:string='';
  set user(user:FruitUser){
    localStorage.setItem('fruit-user',JSON.stringify(user));
  }
  get user():FruitUser{
    return JSON.parse(localStorage.getItem('fruit-user'));
  }
  async listRecommandGroups(){
    return this.api.Get(this.listRecommandGroupsApi+'?adminId='+this.adminId);
  }

  async userLogin(phone,password){
      return this.api.Post(this.fruitUserLoginApi+`?adminId=${this.adminId}`, {phone,password});
  }
  async listFruitGroups(){
    return this.api.Get(this.listFruitGroupsApi+`?adminId=${this.adminId}`);
  }
  async getGroupProducts(groupId:string){
    return  this.api.Get(this.getGroupProductsApi+`?adminId=${this.adminId}&groupId=${groupId}`);
  }


  constructor(public api:ApiService,public router:Router,public route :ActivatedRoute) { }

}
