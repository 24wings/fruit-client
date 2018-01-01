import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientPageComponent } from './fruit-client-page.component';

describe('FruitClientPageComponent', () => {
  let component: FruitClientPageComponent;
  let fixture: ComponentFixture<FruitClientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
