import { TestBed } from '@angular/core/testing';

import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityService = TestBed.get(CityService);
    expect(service).toBeTruthy();
  });


  it('should get city from localhost', () => {

  });

  it('should get cities array from api', () => {

  });

  it('should emit new cities', () => {

  });

});
