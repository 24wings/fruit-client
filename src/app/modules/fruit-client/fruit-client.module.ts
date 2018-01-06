import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, ModalModule, CarouselModule, AlertModule, TooltipModule } from 'ngx-bootstrap';
// import { FruitClientHomePageComponent } from './fruit-client-home-page/fruit-client-home-page.component';
// import { FruitClientSigninPageComponent } from './fruit-client-signin-page/fruit-client-signin-page.component';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from './directive/infinite-scroll';
import { ApiService } from '../../lib';
import { FruitClientService } from './fruit-client.service';
// import { FruitClientPageComponent } from './fruit-client-page/fruit-client-page.component';
// import { FruitClientProductDetailPageComponent } from './fruit-client-product-detail-page/fruit-client-product-detail-page.component';
// import { FruitClientProductGroupsPageComponent } from './fruit-client-product-groups-page/fruit-client-product-groups-page.component';
// import { FruitClientShopingCarPageComponent } from './fruit-client-shoping-car-page/fruit-client-shoping-car-page.component';
// import { FieldImagesComponent } from '../../common/fields/field-images/field-images.component';

// import { FruitClientProductGroupsComponent } from './com/fruit-client-product-groups/fruit-client-product-groups.component';
// import { CloudinaryModule } from '@cloudinary/angular-5.x';
// import * as  Cloudinary from 'cloudinary-core';
// import { FruitClientFooterComponent } from './com/fruit-client-footer/fruit-client-footer.component';

// import { FruitClientMyOrderComponent } from './fruit-client-shoping-car-page/fruit-client-my-order/fruit-client-my-order.component';
// import { FruitClientShopingCarComponent } from './fruit-client-shoping-car-page/fruit-client-shoping-car/fruit-client-shoping-car.component';
// import { FruitClientPersonCenterComponent } from './fruit-client-shoping-car-page/fruit-client-person-center/fruit-client-person-center.component';
import { FruitClientMainPageComponent } from './fruit-client-main-page/fruit-client-main-page.component';
import { LoaderComponent } from '../../common/loader/loader.component';
import { ProductListComponent } from '../../common/product-list/product-list.component';
import { ProductInfoComponent } from './common/product-info/product-info.component';
// import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductSearchComponent } from './common/product-search/product-search.component';
// import { NavbarMenuComponent } from './common/navbar-menu/navbar-menu.component';
import { ImageViewerDirective } from '../../lib/directive/image-viewer.directive';
import { SearchComponent } from './common/search/search.component';
import { BtnGroupComponent } from './common/btn-group/btn-group.component';
import { ProductsPageComponent } from './products-page/products-page.component';
// import { SidebarComponent } from '../../common/sidebar/sidebar.component';
// import { ShopinglistViewComponent } from '../../common/sidebar/shopinglist-view/shopinglist-view.component';
import { OrderInfoComponent } from '../../common/sidebar/order-info/order-info.component';
// import { BrandComponent } from '../../common/sidebar/brand/brand.component';
// import { NavigatorComponent } from '../../common/sidebar/navigator/navigator.component';

// import { LoaderComponent } from '../../common/loader/loader.component';
import { LibModule } from '../../lib/lib.module';

@NgModule({
  imports: [
    LibModule.forRoot(),
    CommonModule,
    HttpModule,
    RouterModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    InfiniteScrollModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    // CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dnf1ydl7w' }),
    RouterModule.forChild([
      {
        path: '', component: FruitClientMainPageComponent,
        children: [
          // { path: 'signin', component: FruitClientSigninPageComponent },
          { path: '', component: ProductsPageComponent },
          // { path: 'groups', component: FruitClientProductGroupsPageComponent, },
          // { path: 'shoping-car', component: FruitClientShopingCarPageComponent, data: { label: '购物车' } },
          // { path: 'product', component: FruitClientProductDetailPageComponent }

        ]

      }

    ])
  ],
  providers: [ApiService, FruitClientService],
  declarations: [
    LoaderComponent,
    // FruitClientHomePageComponent,
    // FruitClientSigninPageComponent,
    // FruitClientPageComponent,
    // FruitClientProductDetailPageComponent,
    // FruitClientProductGroupsPageComponent,
    // FruitClientShopingCarPageComponent,
    // FruitClientProductGroupsComponent,
    // FieldImagesComponent,
    // FruitClientFooterComponent,
    // FruitClientMyOrderComponent,
    // FruitClientShopingCarComponent,
    // FruitClientPersonCenterComponent,
    FruitClientMainPageComponent,
    ProductListComponent
    ,
    // ShopinglistViewComponent,

    ProductInfoComponent,

    // NavbarComponent,

    ProductSearchComponent,

    // NavbarMenuComponent,


    SearchComponent,
    // SidebarComponent,

    BtnGroupComponent,
    ProductsPageComponent,
    OrderInfoComponent,
    // ImageViewerDirective
    // BrandComponent,
    // NavigatorComponent
  ],
  exports: [
    LoaderComponent,
    // FruitClientHomePageComponent,
    // FruitClientSigninPageComponent,
    // FruitClientPageComponent,
    // FruitClientProductDetailPageComponent,
    // FruitClientProductGroupsPageComponent,
    // FruitClientShopingCarPageComponent,
    // FruitClientProductGroupsComponent,
    // FieldImagesComponent,
    // FruitClientFooterComponent,
    // FruitClientMyOrderComponent,
    // FruitClientShopingCarComponent,
    // FruitClientPersonCenterComponent,
    FruitClientMainPageComponent,
    ProductListComponent
    ,
    // ShopinglistViewComponent,

    ProductInfoComponent,

    // NavbarComponent,

    ProductSearchComponent,

    // NavbarMenuComponent,


    SearchComponent,
    // SidebarComponent,

    BtnGroupComponent,
    // ProductsPageComponent,
    OrderInfoComponent
  ]
})
export class FruitClientModule { }
