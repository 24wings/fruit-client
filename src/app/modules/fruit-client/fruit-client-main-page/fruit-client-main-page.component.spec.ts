import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientMainPageComponent } from './fruit-client-main-page.component';

describe('FruitClientMainPageComponent', () => {
  let component: FruitClientMainPageComponent;
  let fixture: ComponentFixture<FruitClientMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
