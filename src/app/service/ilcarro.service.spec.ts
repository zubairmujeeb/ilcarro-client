import { TestBed } from '@angular/core/testing';

import { IlcarroService } from './ilcarro.service';

describe('IlcarroService', () => {
  let service: IlcarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlcarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
