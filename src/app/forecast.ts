export class Forecast{

  base?: string;
  coord?: {
    lon: number;
    lat: number;
    };
  weather: [
      {
      id: number;
      main: string;
      description: string;
      icon: string
      }
  ];
  clouds?: {
      all: number;
  };
  main: {
      temp: number;
      pressure: number;
      humidity: number;
      temp_min: number;
      temp_max: number;
      sea_level?: number;
      grnd_level?: number;
      };
  wind: {
      speed: number;
      deg: number
      };
  sys: {
      message?: number;
      country?: string;
      sunrise: number;
      sunset: number;
      };
  dt: number;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
  seasson?: string;
  windDir?: string;
  day: string;
}