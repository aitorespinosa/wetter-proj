import { TestBed } from '@angular/core/testing';
import { CityService } from './city.service';
import { City } from './city';
import * as MOCK_CITY from './Mock-city';

const FAKE_CITY = MOCK_CITY.mock_response;
// const service: CityService = null;
const store = [];

describe('CityService', () => {
  let service : CityService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityService]
    });

    service = TestBed.get(CityService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get city from localstorage', () => {

    service.newCity(FAKE_CITY);

    let test = service.getCityFromLS();

    expect(test).toBeTruthy();
    service.city$.subscribe({
      next: (value) => {
        if(value){
          expect(value).toEqual(FAKE_CITY);
        }
      }
    });
  });


  it('should emit new cities', () => {
    let newCity: City = FAKE_CITY;
    
    service.city$.subscribe({
      next: (value) => {
        if(value){
          expect(value).toBe(newCity);
        }
      }
    });
    
    let test = service.newCity(newCity);
  });


  it('should emit city null on reset', () => {
    
    service.city$.subscribe({
      next: (value) => {
        if(value === null){
          expect(value).toBeNull();
        }
      }
    });
    
    let test = service.resetCity()
  })

});
