import { TestBed } from '@angular/core/testing';

import { GrpTalkService } from './grp-talk.service';

describe('GrpTalkService', () => {
  let service: GrpTalkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpTalkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
