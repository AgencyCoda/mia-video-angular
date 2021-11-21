import { TestBed } from '@angular/core/testing';

import { MiaVideoPanelService } from './mia-video-panel.service';

describe('MiaVideoPanelService', () => {
  let service: MiaVideoPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaVideoPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
