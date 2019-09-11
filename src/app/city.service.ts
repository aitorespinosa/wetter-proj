import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citySource : BehaviorSubject<City> = new BehaviorSubject<City>(null);
  public city$ = this.citySource.asObservable();
  private localStorageTag: string = 'CurrentCity';

  constructor() { }

  public getCityFromLS(){
    let currentCity = JSON.parse(localStorage.getItem(this.localStorageTag));
    
    if (currentCity){
      this.citySource.next(currentCity);
      return true;
    }else{
      this.citySource.next(null);
      return false
    }
  }

  public getCurrentCity(){
    return JSON.parse(localStorage.getItem(this.localStorageTag));
  }
  
  private setCityOnLS(city: City){
    if(city)
      localStorage.setItem( this.localStorageTag, JSON.stringify(city) );
  }

  private removeCityOnLS(){
    localStorage.removeItem(this.localStorageTag);
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
