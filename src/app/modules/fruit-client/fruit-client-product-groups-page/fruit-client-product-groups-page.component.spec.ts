import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientProductGroupsPageComponent } from './fruit-client-product-groups-page.component';

describe('FruitClientProductGroupsPageComponent', () => {
  let component: FruitClientProductGroupsPageComponent;
  let fixture: ComponentFixture<FruitClientProductGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientProductGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientProductGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
