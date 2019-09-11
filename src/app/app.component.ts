import { Component } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  splash: boolean = true;
  private citySubscription: Subscription = null;

  constructor(private cityService: CityService){
    setTimeout(() => {
      this.citySubscription = this.cityService.city$.subscribe({
        next: (value: City) => {
          if (value === null){
            this.splash = true;
          }else{
            this.splash = false;
          }
        }
      });
    });
  }
  
}
