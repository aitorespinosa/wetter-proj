import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private cityService: CityService) { }

  private citySubscription: Subscription = null;
  public city: City = null;

  public visible: boolean = false;
  public splass: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.citySubscription = this.cityService.city$.subscribe({
        next: (value: City) => {
          this.city = value;
        }
      });

      this.getCurrentCity();
    });
  }

  getCurrentCity(){
    this.cityService.getCityFromLS();
  }


  closeSidebar(){
    this.visible = false;
  }

  toggleSidebar(){
    this.visible = !this.visible;
  }

}
