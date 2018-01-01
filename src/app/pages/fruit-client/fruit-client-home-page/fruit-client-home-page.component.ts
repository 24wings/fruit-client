import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-fruit-client-home-page',
  templateUrl: './fruit-client-home-page.component.html',
  styleUrls: ['./fruit-client-home-page.component.css']
})
export class FruitClientHomePageComponent implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
    if (!localStorage.getItem('fruit-client-user')) {
      this.config.router.navigateByUrl('/fruit-client/signin');
    }
  }

}
