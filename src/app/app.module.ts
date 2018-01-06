import { NgModule } from '@angular/core';
import { LibModule } from './lib';
import { TooltipModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// import { CloudinaryImageComponent } from './common/cloudinary-image/cloudinary-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { BrandComponent } from './common/sidebar/brand/brand.component';
import { NavigatorComponent } from './common/sidebar/navigator/navigator.component';
import { ShopinglistViewComponent } from './common/sidebar/shopinglist-view/shopinglist-view.component';
import { FruitClientService } from './modules/fruit-client/fruit-client.service';
import { FruitClientModule } from './modules/fruit-client/fruit-client.module';;
// import { ProductListComponent } from './common/product-list/product-list.component';

// import { FruitClientModule } from './modules/fruit-client/fruit-client.module';


@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,


    // CloudinaryImageComponent,
    SidebarComponent,
    BrandComponent,
    NavigatorComponent,
    ShopinglistViewComponent,
    // ProductListComponent,
    // LoaderComponent
  ],
  imports: [
    FruitClientModule,
    TooltipModule.forRoot(),


    LibModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,


    RouterModule.forRoot([
      { path: '', redirectTo: '/fruit-client', pathMatch: 'full', data: { label: 'default' } },
      { path: 'fruit-client', loadChildren: 'app/modules/fruit-client/fruit-client.module#FruitClientModule', data: { label: '水果客户端' } },
    ]),

    CommonModule,
  ],
  providers: [FruitClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
