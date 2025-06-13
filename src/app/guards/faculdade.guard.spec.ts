import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { faculdadeGuard } from './faculdade.guard';

describe('faculdadeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => faculdadeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
