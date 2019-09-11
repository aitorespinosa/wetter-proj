import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from './city';
import {mock_response} from './Mock-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citySource : BehaviorSubject<City> = new BehaviorSubject<City>(null);
  public city$ = this.citySource.asObservable();
  private currentCity: string = 'CurrentCity';

  constructor() { }

  public getCityFromLS(){
    let currentCity = JSON.parse(localStorage.getItem('CurrentCity'));
    if (currentCity){
      this.citySource.next(currentCity);
      return true;
    }else{
      this.citySource.next(null);
      return false
    }
  }
  
  private setCityOnLS(city: City){
    if(city)
      localStorage.setItem( this.currentCity, JSON.stringify(city) );
  }

  private removeCityOnLS(){
    localStorage.removeItem(this.currentCity);
  }


  public newCity(city: City){
    if(city)
      this.citySource.next(city);
      this.setCityOnLS(city);
      
  }

  public resetCity(){
    this.removeCityOnLS();
    this.citySource.next(null);

  }


}
