import { TestBed } from '@angular/core/testing';

import { YokaiService } from './yokai.service';

describe('YokaiService', () => {
  let service: YokaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YokaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
