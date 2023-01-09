import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';

describe('ticketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ticketService = TestBed.get(ticketService);
    expect(service).toBeTruthy();
  });
});
