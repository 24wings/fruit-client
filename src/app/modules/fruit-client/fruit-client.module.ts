import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule}from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import { FruitClientHomePageComponent } from './fruit-client-home-page/fruit-client-home-page.component';
import { FruitClientSigninPageComponent } from './fruit-client-signin-page/fruit-client-signin-page.component';
import {HttpModule} from '@angular/http';
import {ApiService} from '../../lib';
import {FruitClientService} from './fruit-client.service';
import { FruitClientPageComponent } from './fruit-client-page/fruit-client-page.component';
import { FruitClientProductDetailPageComponent } from './fruit-client-product-detail-page/fruit-client-product-detail-page.component';
import { FruitClientProductGroupsPageComponent } from './fruit-client-product-groups-page/fruit-client-product-groups-page.component';

@NgModule({
  imports: [
    CommonModule,
      HttpModule,
      RouterModule,    
      BsDropdownModule.forRoot(),
      FormsModule,
    RouterModule.forChild([
      {path:'',component:FruitClientPageComponent, children:[
        { path: 'signin', component: FruitClientSigninPageComponent },
        { path: '', component: FruitClientHomePageComponent },
        {path:'groups',component:FruitClientProductGroupsPageComponent,},
        
        {path:'product/:productId',component:FruitClientProductDetailPageComponent}
        
      ]}
      
    ])
  ],
  providers:[ApiService,FruitClientService],
  declarations: [FruitClientHomePageComponent, FruitClientSigninPageComponent, FruitClientPageComponent, FruitClientProductDetailPageComponent, FruitClientProductGroupsPageComponent]
})
export class FruitClientModule { }
