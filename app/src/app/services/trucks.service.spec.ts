/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrucksService } from './trucks.service';

describe('Service: Trucks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrucksService]
    });
  });

  it('should ...', inject([TrucksService], (service: TrucksService) => {
    expect(service).toBeTruthy();
  }));
});
