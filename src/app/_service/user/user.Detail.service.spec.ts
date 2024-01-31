import { TestBed } from '@angular/core/testing';

import { UserDetailService } from './userDetail.service';

describe('AgentService', () => {
  let service: UserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
