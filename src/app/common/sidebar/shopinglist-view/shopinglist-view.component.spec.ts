import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinglistViewComponent } from './shopinglist-view.component';

describe('ShopinglistViewComponent', () => {
  let component: ShopinglistViewComponent;
  let fixture: ComponentFixture<ShopinglistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopinglistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopinglistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
