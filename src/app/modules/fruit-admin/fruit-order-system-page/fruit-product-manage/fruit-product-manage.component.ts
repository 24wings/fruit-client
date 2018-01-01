import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ConfigService } from '../../../../lib';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
enum Views {
  ListProductGroup = 1,
  CreateProductGroup,
  CreateProduct,
  // ProductGroupDetail,
  ProductDetail,

}
@Component({
  selector: 'app-fruit-product-manage',
  templateUrl: './fruit-product-manage.component.html',
  styleUrls: ['./fruit-product-manage.component.css']
})
export class FruitProductManageComponent implements OnInit {
  selectedProduct: FruitProduct;
  @ViewChild('deleteProductTemplate') deleteProductTemplate: TemplateRef<any>;
  showMoreProductGroup: boolean = false;
  Views = Views;
  state: Views = Views.ListProductGroup;
  selectedProductGroup;
  /**
   *  name?: string;
  image?: any;
  products?: any[]
  createDt?: Date;
   */
  productGroupFields: Field[] = [];
  productGroupFormGroup: FormGroup;
  productFields: Field[] = [];
  productFormGroup: FormGroup;


  bsRef: BsModalRef;
  productGroups: FruitProductGroup[] = [];

  search(keyword: string) {

  }

  async listProductGroups() {
    this.productGroups = await this.config.fruit.listProductGroups();
    await this.selectProductGroup(this.productGroups[0])
  }

  constructor(public config: ConfigService, public bsModelService: BsModalService) { }

  async ngOnInit() {
    this.productGroupFields = this.config.fruit.fruitProductGroupFields;
    this.productGroupFormGroup = this.config.fieldsToFromGroup(this.productGroupFields);
    this.productFields = this.config.fruit.fruitProductFields;
    this.productFormGroup = this.config.fieldsToFromGroup(this.productFields);

    await this.listProductGroups();
  }

  async selectProductGroup(group: FruitProductGroup) {
    this.selectedProductGroup = await this.config.fruit.getProductGroupProducts(group._id);
    this.state = Views.ListProductGroup;
  }

  async saveNewProductGroup() {

    if (this.productGroupFormGroup.status.toLocaleLowerCase() == 'valid') {
      let value = this.productGroupFormGroup.value;
      console.log(value);
      let result = await this.config.fruit.createProductGroup(value);
      if (result) {
        this.listProductGroups();
      }
      this.state = Views.ListProductGroup;
    }
  }

  async toggleGroupRecommand(group: FruitProductGroup) {
    await this.config.fruit.updateGroupRecommand(group._id, !group.isRecommand);
    await this.listProductGroups()
  }

  async  updateProductGroup() {
    delete this.productGroupFormGroup.value._id;

    await this.config.fruit.updateProductGroup(this.selectedProductGroup._id, this.selectedProductGroup);
    await this.listProductGroups();
  }

  async selectImage() {
    let image = await this.config.common.selectFile();
    this.selectedProductGroup.image = image;
  }
  async deleteProductGroup() {
    await this.config.fruit.deleteProductGroup(this.selectedProductGroup._id);
    await this.listProductGroups();
  }

  async saveProduct() {
    let product = this.productFormGroup.value;
    product.group = this.selectedProductGroup._id;

    let newProduct = await this.config.fruit.createProduct(this.selectedProductGroup._id, product);
    await this.listProductGroups();
  }
  async showDeleteProductConfirm(product: FruitProduct) {
    this.selectedProduct = product;
    this.bsRef = await this.bsModelService.show(this.deleteProductTemplate);
  }
  async deleteProduct() {
    let remove = await this.config.fruit.deleteProduct(this.selectedProduct._id);
    this.selectProductGroup(this.selectedProductGroup);
  }
  async updateProduct() {
    console.log(this.selectedProduct);

    let ok = await this.config.fruit.updateProduct(this.selectedProduct._id, this.selectedProduct);
    await this.listProductGroups();
  }

  selectProduct(product: FruitProduct) {
    this.selectedProduct = product;
    this.state = Views.ProductDetail;
  }
}
