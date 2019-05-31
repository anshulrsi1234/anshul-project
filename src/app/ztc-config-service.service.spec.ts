import { TestBed } from '@angular/core/testing';

import { ZtcConfigServiceService } from './ztc-config-service.service';

describe('ZtcConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZtcConfigServiceService = TestBed.get(ZtcConfigServiceService);
    expect(service).toBeTruthy();
  });
});
