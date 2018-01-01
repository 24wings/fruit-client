import { TestBed, inject } from '@angular/core/testing';

import { FruitClientService } from './fruit-client.service';

describe('FruitClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitClientService]
    });
  });

  it('should be created', inject([FruitClientService], (service: FruitClientService) => {
    expect(service).toBeTruthy();
  }));
});
