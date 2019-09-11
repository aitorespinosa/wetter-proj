import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Art } from './art';
import { CityService } from './city.service';
import * as MOCK_ART from './Mock-art';
import { ForecastService } from './forecast.service';
import { Forecast } from './forecast';
import { City } from './city';
import * as APIS from './apis';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArtService {

  private artSource : BehaviorSubject<Art> = new BehaviorSubject<Art>(null);
  public art$ = this.artSource.asObservable();

  public interval : number = 90000;
  private intervalHandler: any = null;
  private localStorageTag: string = 'CurrentArts';
  private cityHandle: City = null;
  private weatherHandle: Forecast = null

  private accesKey = APIS.unsplash_access;
  private endPoint: string = 'https://api.unsplash.com/photos/random/';
  private limit: number = 30;

  constructor(private cityService : CityService, private forecastService: ForecastService, protected http: HttpClient) {
    this.forecastService.weather$.subscribe({
      next: (value) => {
        if(value){
          this.weatherHandle = value;
          this.cityHandle = this.cityService.getCurrentCity();
          this.startInterval(true);
          this.getArtsfromAPI(true);
        }
      }
    })
  }

/**
 * LocalStorage
 */

private getArtsFromLS(){
  let currentArts : Art[] = JSON.parse(localStorage.getItem(this.localStorageTag));
  return currentArts;
}


private getArtFromLS(){
 
}

private setArtsOnLS(arts: Art[]){
  if(arts)
    localStorage.setItem( this.localStorageTag, JSON.stringify(arts) );
}

private removeArtsOnLS(){
  localStorage.removeItem(this.localStorageTag);
}

private getArtsfromAPI(newCity : boolean = false) {
  this.http.get(this.endPoint 
    + '?query=' + this.getTags(this.cityHandle, this.weatherHandle).join('+') 
    + '&count=' + this.limit
    + '&orientation=landscape'
    + '&client_id=' + this.accesKey
    ).pipe(
      map(
        (res) => {return res}
      )
    ).subscribe(
      (data: Art[]) => {
        if(!newCity){
          data = this.getArtsFromLS().concat(data);
        }
        this.setArtsOnLS(data);
      },
      (error) => {
        if (this.getArtsFromLS().length < 1){
          this.stopInverval();
        }
      }
    );
}

private getTags(city: City, weather: Forecast){
    return [
      'landscape',
      city.country,
      city.name,
      weather.seasson,
      weather.day
    ]
  }

/**
 * Intervals
 */


  private routine(newCity : boolean = false){
    let currentArts = this.getArtsFromLS();
  
    if (currentArts){
      let nextArt = currentArts.shift();
      
      if(currentArts)
        this.setArtsOnLS(currentArts);
        this.artSource.next(nextArt);

        if(currentArts.length < 4)
          if(!newCity)
            this.getArtsfromAPI()
        
    }else{
      this.artSource.next(null);
    }

   
  }

  private startInterval(newCity : boolean = false){
    this.stopInverval(); // Prevent double interval.
    this.getArtsfromAPI(newCity)
    this.routine()

    this.intervalHandler = setInterval(() => {
      this.routine()

    }, this.interval);
  }

  private stopInverval(){
    clearInterval(this.intervalHandler);
  }





}
