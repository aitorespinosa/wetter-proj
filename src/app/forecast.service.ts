import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Forecast } from './forecast';
import { City } from './city';
import { CityService } from './city.service';
import * as APIS from './apis';

@Injectable({
  providedIn: 'root'
})

export class ForecastService {
  accesKey = APIS.forecast_key;
  weather_endpoint = APIS.weather_endpoint;
  fiveDaysForecast_endpoint = APIS.forecast_endpoint;

  private weatherSource : BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>(null);
  public weather$ = this.weatherSource.asObservable();

  private interval: number =  300000;
  private intervalHandler: any = null;
  private cityHandle: City = null;
  private localStorageTag: string = 'CurrentWeather';
  private localStorageTagForecast: string = 'CurrentForecast';

  constructor( private http : HttpClient, private cityService: CityService ) {
    setTimeout(()=>{

      this.getWeatherFromLS();

      this.cityService.city$.subscribe({
        next: (value: City) => { 
          console.log(value);
          if(value){
            this.cityHandle = value;
            this.startInterval()
          }
          else{
            this.stopInverval();
            this.cityHandle = value
            this.weatherSource.next(null)
          }
        }
      })
    });
  }

/**
 * LocalStorage
 */

  private getWeatherFromLS(){
    let currentWeather : Forecast = JSON.parse(localStorage.getItem(this.localStorageTag));
    
    if (currentWeather){
      this.weatherSource.next(currentWeather);
      return true;

    }else{
      this.weatherSource.next(null);
      return false
    }
  }

  private getForecastFromLS(){
    let currentForecast : Forecast[] = JSON.parse(localStorage.getItem(this.localStorageTagForecast));
    
    if (currentForecast){
      let currentDate = new Date();
      let future = currentForecast.filter( ele  => ele.dt > currentDate.getTime());
      
        if (future.length){
          this.weatherSource.next(future[0]);
        }else{
          this.weatherSource.next(null);
          this.stopInverval();
        }
    }else{
      this.weatherSource.next(null);
    }
  }
  
  private setWeatherOnLS(weather: Forecast){
    if(weather)
      localStorage.setItem( this.localStorageTag, JSON.stringify(weather) );
  }

  private setForecastOnLS(forecast: Forecast[]){
    if(forecast)
      localStorage.setItem( this.localStorageTagForecast, JSON.stringify(forecast) );
  }

  private removeWeatherOnLS(){
    localStorage.removeItem(this.localStorageTag);
    localStorage.removeItem(this.localStorageTagForecast);
  }

  /**
   * Intervals
   */

  public routine(){
    this.getWeather(this.cityHandle);
    console.log(this.cityHandle)
  }

  private startInterval(){
    this.stopInverval(); //prevent double interval.
    this.routine();

    this.intervalHandler = setInterval(() => {
      this.routine();
    }, this.interval);
  }

  private stopInverval(){
    clearInterval(this.intervalHandler);
  }

/**
 * API Connection
 */

  private getWeather(city: City){    
    let a = this.weather_endpoint 
    + '?lat=' + city.latitude
    + '&lon=' + city.longitude 
    + '&APPID=' + this.accesKey;
    
    this.http.get(a).pipe(
      map(
        (res: any) => {
          let f: Forecast = res; 
          return this.formatWeather(f);
        }
      )
    ).subscribe(
      (data) => {
        this.weatherSource.next(data);
        this.setWeatherOnLS(data);
        this.getForecast(city);
      },
      (error) => {
        this.getForecastFromLS();
      }); 
  }

  private getForecast(city: City){
    let a = this.fiveDaysForecast_endpoint 
      + '?lat=' + city.latitude
      + '&lon=' + city.longitude 
      + '&APPID=' + this.accesKey;
    
    this.http.get(a).pipe(
        map(
          (res: any) => {
            let f: Array<Forecast> = res.list; 

            f.map( (ele: Forecast) => {
              return this.formatWeather(ele)
            });
            return f;
          }
        )
      ).subscribe(
        (data) => {
          this.setForecastOnLS(data);
        },
        (error) => {
          //TODO sacarlo del LS
        }); 

  }


/**
 * Helpers
 */
  
  private formatWeather(raw: Forecast){
    this.degToCompass(raw);
    this.dateToSeasson(raw);
    this.timeStamptoDay(raw);
    return raw;
  }

  private degToCompass (data : Forecast) {
    let deg : number = data.wind.deg;
    let val : number = Math.floor( (deg/22.5) + 0.5 )%16;
    let compass : string[] = [ 
      "N", "NNE", "NE", "ENE",
      "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW",
      "W", "WNW", "NW", "NNW"
    ];
    data.windDir = compass[ val ];
  };

  private dateToSeasson (data : Forecast) {
    let date = new Date(data.dt*1000);
    date.setDate(date.getDate() + 8);

    let val : number = Math.floor( ( date.getMonth() ) / 4 ) % 4;
    let seasson : string[] = [ 
      "Winter", "Spring", "Summer", "Autunm"
    ]
    data.seasson = seasson[ val ]; 
  };

  private timeStamptoDay( data: Forecast){
    let now = new Date().getTime();
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;

    if (now < sunset){
      data.day = (now > sunrise) ? 'day' : 'night';
    }else{
      data.day = (now < sunrise) ? 'day' : 'night';
    }
  }
  
}

