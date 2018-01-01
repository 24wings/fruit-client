import { Component, OnInit, Input } from '@angular/core';

interface CloudinarImageyOptions {
  public_id: string;

}

@Component({
  selector: 'app-cloudinary-image',
  templateUrl: './cloudinary-image.component.html',
  styleUrls: ['./cloudinary-image.component.css']
})
export class CloudinaryImageComponent implements OnInit {
  @Input() cloudinaryImage: CloudinarImageyOptions;
  constructor() { }

  ngOnInit() {
  }

}
