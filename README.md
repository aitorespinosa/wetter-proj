# The Weather Project 


This project was made on Angular 8, for an assignment of an Multi-Distribution Front End Application.

Some parts of the assigment has been developed with Angular CLI, ElectronJS and Material Design.

## API Requirements

This application uses some third party APIs:

* [OpenWeather](https://openweathermap.org/api)
* [Unsplash](https://unsplash.com/documentation)
* [GeoDB](https://rapidapi.com/)

Please fill in the API.ts file (/src/app/) with the necessary keys and endpoints.

## Requirements

- [x] Web version. The app can be accessed via most used web browsers with no loss of features: Firefox, Chrome, Safari, Edge.

- [x]  Desktop version. The app is distributed with a desktop version. That means it has to be able to be downloaded and installed to desktop main OSs (Windows and Linux).

- [x] The app has to be able to remain functional even when there is not connection to Internet. Yes, we mean offline features. Besides, the app has to be able to detect the cnnection is available again and synchronize data with the Back End.

- [x] Usability and User Experience are key aspects. The app has to be easy and intuitive for not-trained users.

- [x] How to display large amounts of data. The app will show somewhere a long list of records. The list has to be responsive, low-latency and really easy to use.

- [x] Mobile app. The app should be ready to be published to main mobile app stores (Google Play and Apple Store). The model can ca hybrid or native.

- [ ] SDLC for a multi-target distribution can be complex. Please include in your assignment your preferred approach for this area as well as a basic implementation at least.


## Development Server & Production build

This application has been developed with the Angular CLI Tools

For run this project:
1. Clone in your local machine.
`$git clone https://github.com/aitorespinosa/wetter-proj-2.git`

2. Fill `/src/app/apis.ts` with your API keys.

3. Start live development server with command:
`$ng serve -o`

4. Deploy production version with command:
`$ng build --prod`

## Testing
There is only one unit test at this project. 
It only covers City service because the rest of files have some observer dependences that I can not find the way to mock them.

For run unit tests:
`$ng test`



## Desktop version
Made with Electron, this application is up to run in desktop enviroments.

For compile a MacOS version, type:
`$electron-packager ./ wetter-proj --platform=darwin --icon src/weather-icon.icns --overwrite`

## Mobile native apps
With a little help of Angular CLI, I tested Mobile App versions.

For compile, type:
- iOS: `$tns run ios --bundle`
- Android: `$tns run android --bundle`

##Offline mode
*Wetter-proj* has an offline service based on Service Workers.
This task is not totally finished; it run as normal but it is not implemented *push* and *sync* services.

For run with Service Workers, deploy for production and start in a HTTP server running on localhost service or on SSL enviroment.

If you need a light HTTP server, type and run:
1. `$npm install -g http-server`
2. `$cd dist/`
3. `$http-server -p 8080`

##Some considerations
- This app is the result of a continuos learning during 10 days.
- This version was made from scratch during the last two days.
- The main idea is an application in which you enter a city and return weather data and photographs according to the city, country, season and day or night.
- Weather and photographs services have some methods for refresh data from time to time.
- Unsplash API is not very strict with its results, so the images do not always correspond to the marked parameters.
- I would like learn more about TDD tests but I found a lot of problems mocking some services. I'll try to resolve it soon and finish all tests.
- From the first version (10 days ago) to this one, there are a consider improve in compontents and services comunication. Angular Subjects & Observers are the best. 😍
- I tried to implement BDD tests with Cucumber and Protractor but crash at start. I can't find the way to run it. 😢

Bash shows:
```bash
Mac-mini-de-Aitor:wetter-proj-2 aitor$ ./node_modules/protractor/bin/protractor protractor.conf.js
[03:30:25] W/driverProviders - Using driver provider hosted, but also found extra driver provider parameter(s): seleniumServerJar
[03:30:25] I/launcher - Running 1 instances of WebDriver
[03:30:25] I/hosted - Using the selenium server at http://127.0.0.1:4444/wd/hub
[03:30:27] E/launcher - Error: Error: config.framework (cucumber) is not a valid framework.
    at q.then.then.then.then (/Users/aitor/Desktop/wetter-proj-2/node_modules/protractor/built/runner.js:381:23)
    at _fulfilled (/Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:834:54)
    at /Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:863:30
    at Promise.promise.promiseDispatch (/Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:796:13)
    at /Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:556:49
    at runSingle (/Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:137:13)
    at flush (/Users/aitor/Desktop/wetter-proj-2/node_modules/q/q.js:125:13)
    at process._tickCallback (internal/process/next_tick.js:61:11)
[03:30:27] E/launcher - Process exited with error code 100
```

##Bugs detected
- GeoDB API, used in cities search, has a very small limit rate per second. So it's easy to type and crash it. You have to restart the program.


------------
Aitor Espinosa
Last rev. 2019-09-12 03:36:47 Thursday