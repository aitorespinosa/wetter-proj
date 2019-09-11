'use strict';

import { Forecast } from './forecast';


export const mock_weather_response : Forecast = {
  "coord": {
    "lon": -98.8,
    "lat": 24.95
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 305.6,
    "pressure": 1017.24,
    "humidity": 52,
    "temp_min": 305.6,
    "temp_max": 305.6,
    "sea_level": 1017.24,
    "grnd_level": 992.57
  },
  "wind": {
    "speed": 3.07,
    "deg": 67.713
  },
  "clouds": {
    "all": 100
  },
  "dt": 1567795960,
  "sys": {
    "message": 0.0128,
    "country": "MX",
    "sunrise": 1567772284,
    "sunset": 1567817374
  },
  "timezone": -18000,
  "id": 3483197,
  "name": "San Fernando",
  "cod": 200,
  "seasson": 'Summer',
  "windDir": 'ENE',
  "day": 'night'
};

export const mock_forecast_response : any = {
  "cod": "200",
  "message": 0.0089,
  "cnt": 40,
  "list": [
    {
      "dt": 1567803600,
      "main": {
        "temp": 306.7,
        "temp_min": 306.7,
        "temp_max": 306.7,
        "pressure": 1014.58,
        "sea_level": 1014.58,
        "grnd_level": 989.85,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.71,
        "deg": 106.766
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-06 21:00:00"
    },
    {
      "dt": 1567814400,
      "main": {
        "temp": 304.1,
        "temp_min": 304.1,
        "temp_max": 304.1,
        "pressure": 1014.79,
        "sea_level": 1014.79,
        "grnd_level": 989.93,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4.44,
        "deg": 111.516
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-07 00:00:00"
    },
    {
      "dt": 1567825200,
      "main": {
        "temp": 300.32,
        "temp_min": 300.32,
        "temp_max": 300.322,
        "pressure": 1016.95,
        "sea_level": 1016.95,
        "grnd_level": 991.81,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 4.85,
        "deg": 118.472
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-07 03:00:00"
    },
    {
      "dt": 1567836000,
      "main": {
        "temp": 298.8,
        "temp_min": 298.796,
        "temp_max": 298.8,
        "pressure": 1016.86,
        "sea_level": 1016.86,
        "grnd_level": 991.66,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 2.46,
        "deg": 139.143
      },
      "rain": {
        "3h": 0.312
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-07 06:00:00"
    },
    {
      "dt": 1567846800,
      "main": {
        "temp": 298.1,
        "temp_min": 298.1,
        "temp_max": 298.1,
        "pressure": 1015.43,
        "sea_level": 1015.43,
        "grnd_level": 990.34,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 1.7,
        "deg": 168.505
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-07 09:00:00"
    },
    {
      "dt": 1567857600,
      "main": {
        "temp": 297.4,
        "temp_min": 297.4,
        "temp_max": 297.4,
        "pressure": 1015.77,
        "sea_level": 1015.77,
        "grnd_level": 990.62,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 25
      },
      "wind": {
        "speed": 1.26,
        "deg": 174.303
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-07 12:00:00"
    },
    {
      "dt": 1567868400,
      "main": {
        "temp": 301.5,
        "temp_min": 301.5,
        "temp_max": 301.5,
        "pressure": 1016.87,
        "sea_level": 1016.87,
        "grnd_level": 992.04,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.76,
        "deg": 120.093
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-07 15:00:00"
    },
    {
      "dt": 1567879200,
      "main": {
        "temp": 305.5,
        "temp_min": 305.5,
        "temp_max": 305.5,
        "pressure": 1015.17,
        "sea_level": 1015.17,
        "grnd_level": 990.38,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.93,
        "deg": 92.388
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-07 18:00:00"
    },
    {
      "dt": 1567890000,
      "main": {
        "temp": 306.513,
        "temp_min": 306.513,
        "temp_max": 306.513,
        "pressure": 1013.48,
        "sea_level": 1013.48,
        "grnd_level": 988.52,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 28
      },
      "wind": {
        "speed": 6.5,
        "deg": 113.358
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-07 21:00:00"
    },
    {
      "dt": 1567900800,
      "main": {
        "temp": 303.824,
        "temp_min": 303.824,
        "temp_max": 303.824,
        "pressure": 1012.88,
        "sea_level": 1012.88,
        "grnd_level": 987.96,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 26
      },
      "wind": {
        "speed": 5.52,
        "deg": 128.058
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-08 00:00:00"
    },
    {
      "dt": 1567911600,
      "main": {
        "temp": 299.388,
        "temp_min": 299.388,
        "temp_max": 299.388,
        "pressure": 1014.83,
        "sea_level": 1014.83,
        "grnd_level": 989.82,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.68,
        "deg": 129.239
      },
      "rain": {
        "3h": 0.125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-08 03:00:00"
    },
    {
      "dt": 1567922400,
      "main": {
        "temp": 298.3,
        "temp_min": 298.3,
        "temp_max": 298.3,
        "pressure": 1014.98,
        "sea_level": 1014.98,
        "grnd_level": 989.87,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.88,
        "deg": 144.509
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-08 06:00:00"
    },
    {
      "dt": 1567933200,
      "main": {
        "temp": 297.524,
        "temp_min": 297.524,
        "temp_max": 297.524,
        "pressure": 1014.01,
        "sea_level": 1014.01,
        "grnd_level": 988.72,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.57,
        "deg": 149.446
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-08 09:00:00"
    },
    {
      "dt": 1567944000,
      "main": {
        "temp": 296.642,
        "temp_min": 296.642,
        "temp_max": 296.642,
        "pressure": 1014.57,
        "sea_level": 1014.57,
        "grnd_level": 989.14,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.79,
        "deg": 131.828
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-08 12:00:00"
    },
    {
      "dt": 1567954800,
      "main": {
        "temp": 302,
        "temp_min": 302,
        "temp_max": 302,
        "pressure": 1015.36,
        "sea_level": 1015.36,
        "grnd_level": 990.29,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.25,
        "deg": 145.457
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-08 15:00:00"
    },
    {
      "dt": 1567965600,
      "main": {
        "temp": 306.059,
        "temp_min": 306.059,
        "temp_max": 306.059,
        "pressure": 1013.78,
        "sea_level": 1013.78,
        "grnd_level": 988.83,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.88,
        "deg": 143.109
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-08 18:00:00"
    },
    {
      "dt": 1567976400,
      "main": {
        "temp": 307.042,
        "temp_min": 307.042,
        "temp_max": 307.042,
        "pressure": 1011.3,
        "sea_level": 1011.3,
        "grnd_level": 986.34,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.44,
        "deg": 134.78
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-08 21:00:00"
    },
    {
      "dt": 1567987200,
      "main": {
        "temp": 304,
        "temp_min": 304,
        "temp_max": 304,
        "pressure": 1011.32,
        "sea_level": 1011.32,
        "grnd_level": 986.4,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 6.9,
        "deg": 127.127
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-09 00:00:00"
    },
    {
      "dt": 1567998000,
      "main": {
        "temp": 299.7,
        "temp_min": 299.7,
        "temp_max": 299.7,
        "pressure": 1013.41,
        "sea_level": 1013.41,
        "grnd_level": 988.45,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.7,
        "deg": 136.643
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-09 03:00:00"
    },
    {
      "dt": 1568008800,
      "main": {
        "temp": 298.988,
        "temp_min": 298.988,
        "temp_max": 298.988,
        "pressure": 1014.2,
        "sea_level": 1014.2,
        "grnd_level": 988.92,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 127.339
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-09 06:00:00"
    },
    {
      "dt": 1568019600,
      "main": {
        "temp": 298.022,
        "temp_min": 298.022,
        "temp_max": 298.022,
        "pressure": 1013.29,
        "sea_level": 1013.29,
        "grnd_level": 987.82,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.82,
        "deg": 117.758
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-09 09:00:00"
    },
    {
      "dt": 1568030400,
      "main": {
        "temp": 297.2,
        "temp_min": 297.2,
        "temp_max": 297.2,
        "pressure": 1013.49,
        "sea_level": 1013.49,
        "grnd_level": 988.04,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.32,
        "deg": 130.292
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-09 12:00:00"
    },
    {
      "dt": 1568041200,
      "main": {
        "temp": 302.4,
        "temp_min": 302.4,
        "temp_max": 302.4,
        "pressure": 1014.86,
        "sea_level": 1014.86,
        "grnd_level": 989.77,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.77,
        "deg": 149.929
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-09 15:00:00"
    },
    {
      "dt": 1568052000,
      "main": {
        "temp": 306.3,
        "temp_min": 306.3,
        "temp_max": 306.3,
        "pressure": 1014.07,
        "sea_level": 1014.07,
        "grnd_level": 989.1,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.86,
        "deg": 148.614
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-09 18:00:00"
    },
    {
      "dt": 1568062800,
      "main": {
        "temp": 307.156,
        "temp_min": 307.156,
        "temp_max": 307.156,
        "pressure": 1011.06,
        "sea_level": 1011.06,
        "grnd_level": 986.15,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.07,
        "deg": 135.848
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-09 21:00:00"
    },
    {
      "dt": 1568073600,
      "main": {
        "temp": 303.615,
        "temp_min": 303.615,
        "temp_max": 303.615,
        "pressure": 1011.59,
        "sea_level": 1011.59,
        "grnd_level": 986.79,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.64,
        "deg": 132.927
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-10 00:00:00"
    },
    {
      "dt": 1568084400,
      "main": {
        "temp": 299.646,
        "temp_min": 299.646,
        "temp_max": 299.646,
        "pressure": 1013.26,
        "sea_level": 1013.26,
        "grnd_level": 988.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.46,
        "deg": 137.354
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-10 03:00:00"
    },
    {
      "dt": 1568095200,
      "main": {
        "temp": 298.7,
        "temp_min": 298.7,
        "temp_max": 298.7,
        "pressure": 1013.91,
        "sea_level": 1013.91,
        "grnd_level": 988.67,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.06,
        "deg": 138.022
      },
      "rain": {
        "3h": 0.125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-10 06:00:00"
    },
    {
      "dt": 1568106000,
      "main": {
        "temp": 297.854,
        "temp_min": 297.854,
        "temp_max": 297.854,
        "pressure": 1013.29,
        "sea_level": 1013.29,
        "grnd_level": 987.75,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.33,
        "deg": 123.561
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-10 09:00:00"
    },
    {
      "dt": 1568116800,
      "main": {
        "temp": 297.7,
        "temp_min": 297.7,
        "temp_max": 297.7,
        "pressure": 1013.79,
        "sea_level": 1013.79,
        "grnd_level": 988.22,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 4.61,
        "deg": 132.977
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-10 12:00:00"
    },
    {
      "dt": 1568127600,
      "main": {
        "temp": 302.946,
        "temp_min": 302.946,
        "temp_max": 302.946,
        "pressure": 1015.12,
        "sea_level": 1015.12,
        "grnd_level": 989.76,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.77,
        "deg": 147.592
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-10 15:00:00"
    },
    {
      "dt": 1568138400,
      "main": {
        "temp": 306.621,
        "temp_min": 306.621,
        "temp_max": 306.621,
        "pressure": 1014.5,
        "sea_level": 1014.5,
        "grnd_level": 989.52,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.08,
        "deg": 144.547
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-10 18:00:00"
    },
    {
      "dt": 1568149200,
      "main": {
        "temp": 307.246,
        "temp_min": 307.246,
        "temp_max": 307.246,
        "pressure": 1011.63,
        "sea_level": 1011.63,
        "grnd_level": 986.7,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.13,
        "deg": 136.576
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-10 21:00:00"
    },
    {
      "dt": 1568160000,
      "main": {
        "temp": 303.881,
        "temp_min": 303.881,
        "temp_max": 303.881,
        "pressure": 1012.29,
        "sea_level": 1012.29,
        "grnd_level": 987.38,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.32,
        "deg": 134.762
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-11 00:00:00"
    },
    {
      "dt": 1568170800,
      "main": {
        "temp": 300,
        "temp_min": 300,
        "temp_max": 300,
        "pressure": 1015.07,
        "sea_level": 1015.07,
        "grnd_level": 989.9,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.75,
        "deg": 137.87
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-11 03:00:00"
    },
    {
      "dt": 1568181600,
      "main": {
        "temp": 298.7,
        "temp_min": 298.7,
        "temp_max": 298.7,
        "pressure": 1015.58,
        "sea_level": 1015.58,
        "grnd_level": 990.41,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 4.17,
        "deg": 131.996
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-11 06:00:00"
    },
    {
      "dt": 1568192400,
      "main": {
        "temp": 298.619,
        "temp_min": 298.619,
        "temp_max": 298.619,
        "pressure": 1015.09,
        "sea_level": 1015.09,
        "grnd_level": 989.73,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 17
      },
      "wind": {
        "speed": 4.21,
        "deg": 136.897
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-11 09:00:00"
    },
    {
      "dt": 1568203200,
      "main": {
        "temp": 298.9,
        "temp_min": 298.9,
        "temp_max": 298.9,
        "pressure": 1015.6,
        "sea_level": 1015.6,
        "grnd_level": 990.04,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 13
      },
      "wind": {
        "speed": 5.1,
        "deg": 140.692
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2019-09-11 12:00:00"
    },
    {
      "dt": 1568214000,
      "main": {
        "temp": 302.1,
        "temp_min": 302.1,
        "temp_max": 302.1,
        "pressure": 1016.64,
        "sea_level": 1016.64,
        "grnd_level": 991.43,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 5.59,
        "deg": 144.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-11 15:00:00"
    },
    {
      "dt": 1568224800,
      "main": {
        "temp": 306.561,
        "temp_min": 306.561,
        "temp_max": 306.561,
        "pressure": 1015.33,
        "sea_level": 1015.33,
        "grnd_level": 990.59,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 49
      },
      "wind": {
        "speed": 6.88,
        "deg": 138.766
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2019-09-11 18:00:00"
    }
  ],
  "city": {
    "id": 3483197,
    "name": "San Fernando",
    "coord": {
      "lat": 24.85,
      "lon": -98.1501
    },
    "country": "MX",
    "population": 29171,
    "timezone": -18000,
    "sunrise": 1567772132,
    "sunset": 1567817214
  }
}; 