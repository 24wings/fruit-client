import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldImagesComponent } from './field-images.component';

describe('FieldImagesComponent', () => {
  let component: FieldImagesComponent;
  let fixture: ComponentFixture<FieldImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
