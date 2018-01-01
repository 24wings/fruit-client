import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FruitClientHomePageComponent } from './fruit-client-home-page/fruit-client-home-page.component';
import { FruitClientSigninPageComponent } from './fruit-client-signin-page/fruit-client-signin-page.component';
import { LibModule } from '../../lib';
@NgModule({
  imports: [
    CommonModule,
    LibModule.forRoot(),
    RouterModule.forChild([
      { path: 'signin', component: FruitClientSigninPageComponent },
      { path: '', component: FruitClientHomePageComponent }
    ])
  ],
  declarations: [FruitClientHomePageComponent, FruitClientSigninPageComponent]
})
export class FruitClientModule { }
