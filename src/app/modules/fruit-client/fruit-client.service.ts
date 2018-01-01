import { Injectable } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../lib';
@Injectable()
export class FruitClientService {
  private listRecommandGroupsApi = '/fruit-client.listRecommandGroups.get';
  private fruitUserLoginApi = '/fruit-client.userLogin.post';
  private listFruitGroupsApi = '/fruit-client.listGroups.get';
  private getGroupProductsApi = '/fruit-client.getGroupProducts.get';
  private getProductByIdApi = '/fruit-client.getProductById.get';
  private orderProductApi = '/fruit-client.orderProduct.post';
  private listRecommandProductsApi = '/fruit-client.listRecommandProducts.get';
  adminId: string = '';

  set user(user: FruitUser) {
    localStorage.setItem('fruit-user', JSON.stringify(user));
  }
  get user(): FruitUser {
    return JSON.parse(localStorage.getItem('fruit-user'));
  }
  async listRecommandGroups() {
    return this.api.Get(this.listRecommandGroupsApi + '?adminId=' + this.adminId);
  }
  async listReommandProducts() {
    return this.api.Get(this.listRecommandProductsApi);
  }

  async userLogin(phone, password) {
    return this.api.Post(this.fruitUserLoginApi + `?adminId=${this.adminId}`, { phone, password });
  }
  async listFruitGroups() {
    return this.api.Get(this.listFruitGroupsApi + `?adminId=${this.adminId}`);
  }
  async getGroupProducts(groupId: string) {
    return this.api.Get(this.getGroupProductsApi + `?adminId=${this.adminId}&groupId=${groupId}`);
  }
  async getProductById(productId: string) {
    return this.api.Get(this.getProductByIdApi + `?adminId=${this.adminId}&productId=${productId}`);
  }

  async orderProduct(productId: string) {
    return this.api.Post(this.orderProductApi, { productId, userId: this.user._id });
  }

  constructor(public api: ApiService, public router: Router, public route: ActivatedRoute) { }

}
