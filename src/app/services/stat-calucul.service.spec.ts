import { TestBed } from '@angular/core/testing';

import { StatCaluculService } from './stat-calucul.service';

describe('StatCaluculService', () => {
  let service: StatCaluculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatCaluculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
