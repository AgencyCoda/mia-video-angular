import { TestBed } from '@angular/core/testing';

import { MiaVideoCoreService } from './mia-video-core.service';

describe('MiaVideoCoreService', () => {
  let service: MiaVideoCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaVideoCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
