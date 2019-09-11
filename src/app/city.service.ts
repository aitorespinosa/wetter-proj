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

  constructor() { }

  public getCityFromLS(){
    //TODO: llamar a LS y devolver:
    this.citySource.next(mock_response);
  }

}
