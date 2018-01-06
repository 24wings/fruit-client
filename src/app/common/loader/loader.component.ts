import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() message = '';
  @Input() loading = false;

  @HostBinding('class.show-loader')
  get show() {
    return this.loading;
  }

  ngOnInit() {

  }

}
