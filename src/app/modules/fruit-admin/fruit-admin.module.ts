import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FieldImagesComponent } from '../../common/fields/field-images/field-images.component';

import { AppGroupComponent } from '../../modules/admin/admin-home-page/app-group/app-group.component';
import { NavComponent } from '../../common/nav/nav.component';
import { TextComponent } from '../../common/fields/text/text.component';
import { FieldComponent } from '../../common/fields/field/field.component';
import { FormComponent } from '../../common/fields/form/form.component';
import { TabsModule, ModalModule, BsDropdownModule, AlertModule, BsDatepickerModule } from 'ngx-bootstrap'
import { FruitOrderSystemPageComponent } from './fruit-order-system-page/fruit-order-system-page.component';
import { FruitUserManageComponent } from './fruit-order-system-page/fruit-user-manage/fruit-user-manage.component';
import { FruitAnalysisComponent } from './fruit-order-system-page/fruit-analysis/fruit-analysis.component';
import { FruitProductManageComponent } from './fruit-order-system-page/fruit-product-manage/fruit-product-manage.component';
import { listLocales, defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([{ path: '', component: FruitOrderSystemPageComponent }]),
    HttpModule,
    CommonModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    NavComponent,
    TextComponent,
    FieldComponent,
    FormComponent,
    FieldImagesComponent,
    FruitOrderSystemPageComponent, FruitAnalysisComponent, FruitProductManageComponent, FruitUserManageComponent]
})
export class FruitAdminModule { }
