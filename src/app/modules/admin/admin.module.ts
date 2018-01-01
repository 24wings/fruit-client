import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LibModule, ConfigService } from '../../lib';
import { NavComponent } from '../../common/nav/nav.component';
import { AppGroupComponent } from '../admin/admin-home-page/app-group/app-group.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminSigninPageComponent } from './admin-signin-page/admin-signin-page.component';
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: 'signin', component: AdminSigninPageComponent, data: { label: '登录' } },
    {
      path: '', component: AdminPageComponent, data: { label: '首页' },
      children: [
        { path: '', component: AdminHomePageComponent, data: { label: '首页' } }
      ]
    }]),
    CommonModule,

  ],
  providers: [ConfigService],
  declarations: [AdminPageComponent,
    AdminHomePageComponent,
    AdminSigninPageComponent,
    NavComponent,
    AppGroupComponent
  ]
})
export class AdminModule { }
