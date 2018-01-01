import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: any;
  @Input() form: FormGroup;
  isChecked: boolean = false;
  images: string[] = []
  imageViewer: string;
  timeout: number = 4000;
  constructor(public config: ConfigService) { }
  get isValid() { return this.form.controls[this.field.key].valid || !this.form.controls[this.field.key].touched; }
  ngOnInit() {
    console.log(this.field.controllType);
    this.isChecked = this.form.controls[this.field.key].value;
    let field = this.form.controls[this.field.key];
    // if (this.field.controllType == 'image') {
    //   console.log(this.field.value);
    //   this.field.setValue(this.field.value ? this.field.value.url : '');
    // }
    field.valueChanges.subscribe((e) => {
      if (this.field.controllType == 'image') {
        console.log(field.value, e);
        this.imageViewer = field.value;
      }
    });
    // field.
  }
  get formFiled() {
    return this.form.controls[this.field.key];
  }
  async selectImage() {
    let image = await this.config.common.selectFile();
    this.imageViewer = image;
    this.form.controls[this.field.key].setValue(image);
  }
  toggleFieldValue() {
    let field = this.form.controls[this.field.key];
    field.setValue(!field.value);
    this.isChecked = !this.isChecked;
  }


  async addImage() {
    let oldImages = this.formFiled.value ? this.formFiled.value : [];

    let image = await this.config.common.selectFile();
    oldImages.push(image);

    this.formFiled.setValue(oldImages);
    this.images.push(image);

  }

}
