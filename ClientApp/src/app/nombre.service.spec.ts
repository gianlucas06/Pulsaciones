import { TestBed } from '@angular/core/testing';

import { NombreService } from './nombre.service';

describe('NombreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NombreService = TestBed.get(NombreService);
    expect(service).toBeTruthy();
  });
});
