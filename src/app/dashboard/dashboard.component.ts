import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { City } from '../city';
import { CityService } from '../city.service';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import * as APIS from '../apis';
import { ArtService } from '../art.service';
import { Art } from '../art';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private cityService: CityService, private artService: ArtService, private http: HttpClient) { }

  private citySubscription: Subscription = null;
  public city: City = null;

  public visible: boolean = false;
  public splash: boolean = true;

  public searchCitiesCtrl = new FormControl();
  public filteredCities: City[];
  public isLoading = false;
  public errorMsg: string;

  private accesKey = APIS.GeoDB_key;
  private host = APIS.GeoDB_host;
  private endPoint = 'https://'+this.host+'/v1/geo/cities';

  ngOnInit() {
    setTimeout(() => {
      this.citySubscription = this.cityService.city$.subscribe({
        next: (value: Art) => {
          if (value){
            this.city = value;
            this.closeSplash();
          }else{
            this.openSplash();
          }
        }
      });

      this.getCurrentCity();

    });

    this.activateSearch()

  }

  getCurrentCity(){
    this.cityService.getCityFromLS();
  }
  
  clearConfig(){
    this.cityService.resetCity();
  }

  /**
   * CITY SELECT CONTROLLER
   */


  citySelected(value){
    this.cityService.newCity(value);
  }

  activateSearch(){
    let headers = new HttpHeaders({
      "X-RapidAPI-Host": this.host,
      "X-RapidAPI-Key": this.accesKey
    });

    this.searchCitiesCtrl.setValue('');

    this.searchCitiesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredCities = [];
          this.isLoading = true;
        }),
        
        switchMap(value => this.http.get(this.endPoint+ '?namePrefix=' + value + '&types=CITY', {headers})
          .pipe(
            finalize(() => {
              if (typeof(value) === 'object'){
                this.citySelected(value);
              }
              this.isLoading = false
            }),
          )
        )
      ).subscribe(data => {
        if (data['data'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredCities = [];
        } else {
          this.errorMsg = "";
          this.filteredCities = data['data'];
        }
      });
  }

  displayFn(ele){
    return ele.city;
  }
  /**
   * SPLASH & SIDEBAR
   */

  closeSplash(){
    this.splash = false;
    this.visible = false;
  }

  openSplash(){
    this.splash = true;
    this.visible = true;
  }

  closeSidebar(){
    this.visible = false;
  }

  toggleSidebar(){
    this.visible = !this.visible;
  }

}
