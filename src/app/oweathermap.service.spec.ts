/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OweathermapService } from './oweathermap.service';

describe('Service: Oweathermap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OweathermapService]
    });
  });

  it('should ...', inject([OweathermapService], (service: OweathermapService) => {
    expect(service).toBeTruthy();
  }));
});
