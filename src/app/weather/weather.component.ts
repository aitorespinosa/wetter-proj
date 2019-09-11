import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import * as MOCK_FORECAST from '../Mock-forecast';
import { Subscription } from 'rxjs';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  public visible: boolean = false;
  public weather: Forecast = null;
  private citySubscription: Subscription = null;
  
  constructor(private cityService: CityService) { }

  ngOnInit() {

    setTimeout(() => {
      this.citySubscription = this.cityService.city$.subscribe({
        next: (value: City) => {
          if (value === null){
            this.weather = null
            this.hideWeather();
          }else{
            this.weather = MOCK_FORECAST.mock_weather_response;
            this.showWeather()
          }
        }
      });
    });
  }

  showWeather(){
    this.visible = true;
  }

  hideWeather(){
    this.visible = false;
  }
}
