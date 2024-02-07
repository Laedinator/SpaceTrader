import { TestBed } from '@angular/core/testing';

import { ShipStorageService } from './ship-storage.service';

describe('ShipStorageService', () => {
  let service: ShipStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
