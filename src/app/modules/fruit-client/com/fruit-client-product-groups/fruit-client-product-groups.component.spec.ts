import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientProductGroupsComponent } from './fruit-client-product-groups.component';

describe('FruitClientProductGroupsComponent', () => {
  let component: FruitClientProductGroupsComponent;
  let fixture: ComponentFixture<FruitClientProductGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientProductGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientProductGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
