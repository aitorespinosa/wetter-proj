import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../forecast';
import { Subscription } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  public visible: boolean = false;
  public weather: Forecast = null;
  private weatherSubscription: Subscription = null;
  @Input() city: string;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {

    setTimeout(() => {
      this.weatherSubscription = this.forecastService.weather$.subscribe({
        next: (value: Forecast) => {
          if (value === null){
            this.weather = null
            this.hideWeather();
          }else{
            this.weather = value;
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
