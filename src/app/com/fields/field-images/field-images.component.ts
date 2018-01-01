import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../../lib';
/**
 * 管理图片组
 */
@Component({
  selector: 'app-field-images',
  templateUrl: './field-images.component.html',
  styleUrls: ['./field-images.component.css']
})
export class FieldImagesComponent implements OnInit {
  @Input() images: any[]
  constructor(public config: ConfigService) { }

  ngOnInit() {
    // this.updateImages();
  }
  updateImages() {
    this.images = this.images.filter(image => typeof image != 'string').map(image => image.url);

  }
  async removeImage(image: any) {
    this.images.splice(this.images.indexOf(image), 1);
  }
  async addImage() {
    let base64 = await this.config.common.selectFile();
    this.images.push(base64);
  }

}
