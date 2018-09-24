import { TestBed } from '@angular/core/testing';

import { ExampleNg6LibAppService } from './example-ng6-lib-app.service';

describe('ExampleNg6LibAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleNg6LibAppService = TestBed.get(ExampleNg6LibAppService);
    expect(service).toBeTruthy();
  });
});
