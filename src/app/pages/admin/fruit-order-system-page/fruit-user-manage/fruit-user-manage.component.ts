import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConfigService } from '../../../../lib';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup } from '@angular/forms';

/**用于切换视图不同状态 */
enum Views {
  List = 1,
  UserDetail,
  CreateUser
}


@Component({
  selector: 'app-fruit-user-manage',
  templateUrl: './fruit-user-manage.component.html',
  styleUrls: ['./fruit-user-manage.component.css']
})
export class FruitUserManageComponent implements OnInit {
  @ViewChild('deleteUserTemplate') deleteUserTemplate: TemplateRef<any>;
  isSearching: number;
  fruitUserFields: Field[] = [];
  userFormGroup: FormGroup; //;= new FormGroup({ 'a': new FormControl('') });
  alerts: any[] = [];

  Views = Views;
  state: Views = Views.List;
  selectedUser: FruitUser;
  async selectUser(user: FruitUser) {
    this.state = Views.UserDetail;
    this.selectedUser = user;
    let formValue = this.config.fruit.object2FruitUserFiledsValue(user);
    this.userFormGroup.setValue(formValue);
    // }

  }

  async updateFruitUser() {
    let user: FruitUser = this.userFormGroup.value;
    let ok = await this.config.fruit.updateFruitUser(this.selectedUser._id, user);
    if (ok) {
      this.showMessage('修改成功');
    }

  }


  users: FruitUser[] = [];

  async ngOnInit() {
    await this.listFruitUsers();
    this.fruitUserFields = this.config.fruit.fruitUserFields;
    this.userFormGroup = this.config.fieldsToFromGroup(this.fruitUserFields);


  }
  async listFruitUsers() {
    this.users = await this.config.fruit.listFruitUsers();

  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public config: ConfigService) { }

  confirmDeleteUserModel() {
    this.modalRef = this.modalService.show(this.deleteUserTemplate);
  }
  async deleteFruiteSystemUser(user: FruitUser) {
    if (user) {
      let ok = await this.config.fruit.deleteFruitUser(this.selectedUser._id);
      this.showMessage('删除用户成功');
      await this.listFruitUsers();
    }
  }

  async saveNewFruitUser() {
    if (!this.userFormGroup.invalid) {
      console.log(this.userFormGroup.value);
      let data = await this.config.fruit.createFruitUser(this.userFormGroup.value);
      if (data) {
        this.alerts.push({
          type: 'success',
          msg: `添加用户成功 ${new Date().toLocaleString()})`,
          timeout: 3000
        });
      }
    }
  }

  async search(keyword: string) {
    if (this.isSearching) clearTimeout(this.isSearching);
    setTimeout(async () => { this.users = await this.config.fruit.searchUserListByKeyword(keyword); }, 500);
  }

  showMessage(message?: string) {
    this.alerts.push({
      type: 'success',
      msg: message,
      timeout: 3000
    });

  }
}
