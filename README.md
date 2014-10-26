# Pogoda

Pogoda (Poh-goh-dah) is an assortment of weather-related formulae. With pogoda you can:

1. Convert relative humidity to dew point and vapor pressure
1. Calculate [humidex](http://en.wikipedia.org/wiki/Humidex), [wind chill index](http://en.wikipedia.org/wiki/Wind_chill#North_American_and_United_Kingdom_wind_chill_index), [Australian Apparent Temperature](http://en.wikipedia.org/wiki/Wind_chill#Australian_Apparent_Temperature) (based on temperature, wind speed and humidity), and more to come.

`pogoda` doesn't know a thing about any weather API. Use openweathermap.org or any other API to get current weather conditions.

## Usage

`pogoda` methods accept temperature in Celsius degrees and relative humidity in range of 0..1. Wind speeds are in meters per seconds.

```js
    var pogoda = require('pogoda');
    var currentDewPoint = pogoda.dewPoint(currentWeather.temperature, currentWeather.humidity);
    var humidex = pogoda.humidex(currentWeather.temperature, currentDewPoint);

    if (humidex >= 54) console.warn('Heat stroke imminent!');
```

## Misc

'Pogoda' means 'weather' in Polish (also in Russian and Ukrainian).



