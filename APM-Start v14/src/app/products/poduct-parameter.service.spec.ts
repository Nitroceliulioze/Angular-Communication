import { TestBed } from '@angular/core/testing';

import { PoductParameterService } from './poduct-parameter.service';

describe('PoductParameterService', () => {
  let service: PoductParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoductParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
