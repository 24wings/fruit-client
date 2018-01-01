import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, ModalModule, CarouselModule, AlertModule } from 'ngx-bootstrap';
import { FruitClientHomePageComponent } from './fruit-client-home-page/fruit-client-home-page.component';
import { FruitClientSigninPageComponent } from './fruit-client-signin-page/fruit-client-signin-page.component';
import { HttpModule } from '@angular/http';
import { ApiService } from '../../lib';
import { FruitClientService } from './fruit-client.service';
import { FruitClientPageComponent } from './fruit-client-page/fruit-client-page.component';
import { FruitClientProductDetailPageComponent } from './fruit-client-product-detail-page/fruit-client-product-detail-page.component';
import { FruitClientProductGroupsPageComponent } from './fruit-client-product-groups-page/fruit-client-product-groups-page.component';
import { FruitClientShopingCarPageComponent } from './fruit-client-shoping-car-page/fruit-client-shoping-car-page.component';
import { FieldImagesComponent } from '../../common/fields/field-images/field-images.component';

import { FruitClientProductGroupsComponent } from './com/fruit-client-product-groups/fruit-client-product-groups.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    AlertModule.forRoot(),

    BsDropdownModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dnf1ydl7w' }),
    RouterModule.forChild([
      {
        path: '', component: FruitClientPageComponent, children: [
          { path: 'signin', component: FruitClientSigninPageComponent },
          { path: '', component: FruitClientHomePageComponent },
          { path: 'groups', component: FruitClientProductGroupsPageComponent, },
          { path: 'shoping-car', component: FruitClientShopingCarPageComponent, data: { label: '购物车' } },
          { path: 'product', component: FruitClientProductDetailPageComponent }

        ]
      }

    ])
  ],
  providers: [ApiService, FruitClientService],
  declarations: [FruitClientHomePageComponent,
    FruitClientSigninPageComponent,
    FruitClientPageComponent,
    FruitClientProductDetailPageComponent,
    FruitClientProductGroupsPageComponent,
    FruitClientShopingCarPageComponent,
    FruitClientProductGroupsComponent, FieldImagesComponent]
})
export class FruitClientModule { }
