import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { of, Observable } from 'rxjs';
import * as MOCK_CITY from '../Mock-city';
import { CityService } from '../city.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let FAKE_CITY = MOCK_CITY.mock_response;

 const cityServiceMock: CityService = jasmine.createSpyObj('CityService', ['getCityFromLS', 'city$']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [{provide: CityService, useValue: cityServiceMock}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  // it('should create', () => {

  //   const spy = TestBed.get(CityService);
  //   spy.city$ = of(FAKE_CITY);
    
  //   spyOn(cityServiceMock, 'getCityFromLS').and.returnValue();

  //   expect(component).toBeTruthy();
  // });

  // it('should retrieve current city', () => {
  //   const spy = TestBed.get(CityService);
  //   spy.city$ = of(FAKE_CITY);
    
  //   spyOn(cityServiceMock, 'getCityFromLS').and.callFake( () => {
  //     component.city = FAKE_CITY;
  //   });


  //   let test = component.getCurrentCity();
  //   fixture.detectChanges();
  //   expect(component.city).toEqual(FAKE_CITY);

  // });

  // it('should change city on input selected', () => {
    
  // });


  // it('should call City Service and emit null', () => {

  // });

  // it('Should call Art Service with new Slider Value', () => {

  // });

  // it('should toggle splash screen on null city', () => {

  // });

  // it('should toggle sidebar on toggle button', () => {

  // });

  // it('should close toggle sidebar', () => {
  //     let test = component.toggleSidebar();
  //     expect(component.visible).toBeFalsy;
  // });

});
