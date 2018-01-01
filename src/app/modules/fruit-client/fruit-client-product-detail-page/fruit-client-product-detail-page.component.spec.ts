import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientProductDetailPageComponent } from './fruit-client-product-detail-page.component';

describe('FruitClientProductDetailPageComponent', () => {
  let component: FruitClientProductDetailPageComponent;
  let fixture: ComponentFixture<FruitClientProductDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientProductDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
