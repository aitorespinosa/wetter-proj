import { TestBed } from '@angular/core/testing';

import { ArtService } from './art.service';
import { HttpClient } from 'selenium-webdriver/http';
import * as MOCK_ART from './Mock-art';
import { Art } from './art';

const FAKE_ARTS = MOCK_ART.mock_response;
const FAKE_ART = MOCK_ART.mock_response[0];

describe('ArtService', () => {
  let service : ArtService
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtService,
        { provide: HttpClient, useValue: httpClientSpy }
    ]
    });

    service = TestBed.get(ArtService);
    
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

//   it('should be created', () => {
//     // expect(service).toBeTruthy();
//   });


//   it('should recibe img array from API', () => {
   
//   });

//   it('should store imgs on LocalStorage', () => {

//   });

//   it('should retrive img from LocalStorage', () => {
//  // service.newCity(FAKE_CITY);

//     // let test = service.getCityFromLS();

//     // expect(test).toBeTruthy();
//     // service.city$.subscribe({
//     //   next: (value) => {
//     //     if(value){
//     //       expect(value).toEqual(FAKE_CITY);
//     //     }
//     //   }
//     // });
//   });

//   it('should start interval on city event', () => {

//   })

//   it('should delivery imgs by interval', () => {

//   });

//   it('should calculate tags', () => {

//   });

//   it('should emit an image', () => {
//     // let newArt: Art = FAKE_ART;
    
//     // service.art$.subscribe({
//     //   next: (value) => {
//     //     if(value){
//     //       expect(value).toBe(newArt);
//     //     }
//     //   }
//     // });
    
//     // let test = service.newCity(newCity);
//   });

//   it('should emit city null on reset', () => {
    
//     // service.art$.subscribe({
//     //   next: (value) => {
//     //     if(value === null){
//     //       expect(value).toBeNull();
//     //     }
//     //   }
//     // });
    
//     // let test = service.resetCity()
//   })

});
