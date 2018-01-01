import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientHomePageComponent } from './fruit-client-home-page.component';

describe('FruitClientHomePageComponent', () => {
  let component: FruitClientHomePageComponent;
  let fixture: ComponentFixture<FruitClientHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
