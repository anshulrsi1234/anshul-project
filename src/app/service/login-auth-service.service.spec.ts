import { TestBed } from '@angular/core/testing';

import { LoginAuthServiceService } from './login-auth-service.service';

describe('LoginAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAuthServiceService = TestBed.get(LoginAuthServiceService);
    expect(service).toBeTruthy();
  });
});
