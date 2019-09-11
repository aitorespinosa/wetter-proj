import { TestBed } from '@angular/core/testing';
import { ForecastService } from './forecast.service';
import { Forecast } from './forecast';
import { Subscriber } from 'rxjs';
import * as MOCK_WEATHER_CLASS from './Mock-forecast';
import { CityService } from './city.service';
import { HttpClient } from 'selenium-webdriver/http';
import * as MOCK_CITY from './Mock-city';
import * as MOCK_FORECAST from './Mock-forecast';

const FAKE_CITY = MOCK_CITY.mock_response;
const FAKE_WEATHER = MOCK_FORECAST.mock_weather_response;


describe('ForecastService', () => {
  let service : ForecastService
  let cityServiceSpy;
  let httpClientSpy
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CityService, useValue: cityServiceSpy },
        { provide: HttpClient, useValue: httpClientSpy }
    ]
    });
    let timerCallback = jasmine.createSpy("getWeather");
    jasmine.clock().install();

    service = TestBed.get(ForecastService);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('should be created', () => {
    // const service: ForecastService = TestBed.get(ForecastService);
    // spyOnProperty(cityServiceSpy.city$, 'value', 'get').and.returnValue(FAKE_CITY);
    
    // cityServiceSpy.city$.

    // expect(service).toBeTruthy();
  });

  it('should emit forecast', () => {
    
  });

});
