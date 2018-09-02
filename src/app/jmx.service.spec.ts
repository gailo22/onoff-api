import { TestBed, inject } from '@angular/core/testing';

import { JmxService } from './jmx.service';

describe('JmxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JmxService]
    });
  });

  it('should be created', inject([JmxService], (service: JmxService) => {
    expect(service).toBeTruthy();
  }));
});
