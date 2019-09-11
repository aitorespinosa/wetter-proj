import { TestBed } from '@angular/core/testing';

import { ArtService } from './art.service';

describe('ArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtService = TestBed.get(ArtService);
    expect(service).toBeTruthy();
  });


  it('should recibe img array from API', () => {

  });

  it('should store imgs on LocalStorage', () => {

  });

  it('should retrive img from LocalStorage', () => {

  });

  it('should delivery imgs by interval', () => {

  });

  it('should calculate tags', () => {

  });

  it('should emit an image', () => {

  });

});
