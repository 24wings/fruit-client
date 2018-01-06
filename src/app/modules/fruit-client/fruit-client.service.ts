import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../lib';
@Injectable()
export class FruitClientService {
  // 持续监听事件
  // Observable string sources
  private refershShopingCarSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  refershShopingCar$ = this.refershShopingCarSource.asObservable();
  // missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  refershShopingCar(mission?: string) {
    this.refershShopingCarSource.next(mission);
  }




  private listRecommandGroupsApi = '/fruit-client.listRecommandGroups.get';
  private fruitUserLoginApi = '/fruit-client.userLogin.post';
  private listFruitGroupsApi = '/fruit-client.listGroups.get';
  private getGroupProductsApi = '/fruit-client.getGroupProducts.get';
  private getProductByIdApi = '/fruit-client.getProductById.get';
  private orderProductApi = '/fruit-client.orderProduct.post';
  private listRecommandProductsApi = '/fruit-client.listRecommandProducts.get';
  private getUserShopingCarOrdersApi = '/fruit-client.getUserShopingCarOrders.get';
  private confirmOrderApi = '/fruit-client.confirmOrder.post';
  private removeOrderApi = '/fruit-client.removeOrder.del';
  private getOldOrdersApi = '/fruit-client.getOldOrders.get';
  private buyProductApi = '/fruit-client.buyProduct.post';
  // adminId: string = '';
  adminId: string = '5a461f184ccb323ba8a38fa9';
  // get user(): any {
  //   return { _id: '5a461f2b4ccb323ba8a38faa' };
  // }


  set user(user: any) {
    localStorage.setItem('fruit-user', JSON.stringify(user));
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('fruit-user'));
  }

  async listRecommandGroups() {
    return this.api.Get(this.listRecommandGroupsApi + '?adminId=' + this.adminId);
  }
  async listRecommandProducts() {
    return this.api.Get(this.listRecommandProductsApi + '?adminId=' + this.adminId);
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

  async orderProduct(productId: string, orderNum: number) {
    return this.api.Post(this.orderProductApi + `?adminId=${this.adminId}&productId=${productId}`, { productId, userId: this.user._id, num: orderNum });
  }
  async  getUserShopingCarOrders() {
    return this.api.Get(this.getUserShopingCarOrdersApi + `?adminId=${this.adminId}&userId=${this.user._id}`);
  }
  async confirmOrder(orderId: string, num?: number) {
    return this.api.Post(this.confirmOrderApi + `?adminId=${this.adminId}`, { orderId, userId: this.user._id, num })
  }
  async removeOrder(orderId: string) {
    return this.api.Delete(this.removeOrderApi + `?adminId=${this.adminId}&orderId=${orderId}`);
  }
  getOldOrders() {
    return this.api.Get(this.getOldOrdersApi + `?adminId=${this.adminId}&userId=${this.user._id}`);
  }
  buyProduct(productId: string, buyNum: number) {
    return this.api.Post(this.buyProductApi + `?adminId=${this.adminId}`, { userId: this.user._id, productId, num: buyNum });
  }
  constructor(public api: ApiService, public router: Router, public route: ActivatedRoute) { }

}
