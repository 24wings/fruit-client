import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientShopingCarPageComponent } from './fruit-client-shoping-car-page.component';

describe('FruitClientShopingCarPageComponent', () => {
  let component: FruitClientShopingCarPageComponent;
  let fixture: ComponentFixture<FruitClientShopingCarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientShopingCarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientShopingCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
