import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitClientSigninPageComponent } from './fruit-client-signin-page.component';

describe('FruitClientSigninPageComponent', () => {
  let component: FruitClientSigninPageComponent;
  let fixture: ComponentFixture<FruitClientSigninPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitClientSigninPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitClientSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
