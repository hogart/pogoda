# Pogoda

Pogoda (poh-gOh-dah) is an assortment of weather-related formulae. With pogoda you can:

1. Convert relative humidity to dew point and vapor pressure
1. Calculate [humidex](http://en.wikipedia.org/wiki/Humidex), [wind chill index](http://en.wikipedia.org/wiki/Wind_chill#North_American_and_United_Kingdom_wind_chill_index), [Australian Apparent Temperature](http://en.wikipedia.org/wiki/Wind_chill#Australian_Apparent_Temperature) (based on temperature, wind speed and humidity), and more to come.

`pogoda` is weather API agnostic, i.e. it doesn't make assumptions about which weather service you are getting your data from.

## Usage

`pogoda` methods accept temperature in Celsius degrees and relative humidity in range of 0..1. Wind speeds are in meters per seconds.

```js
    var pogoda = require('pogoda');
    var humidex = pogoda.humidex(currentWeather.temperature, currentWeather.humidity);

    if (humidex >= 54) console.warn('Heat stroke imminent!');

    var windChill = pogoda.windChill(currentWeather.temperature, currentWeather.windSpeed);
    console.info('Apparent temperature: %s°', windchill.toFixed(1))
    if (windchill > -25) {
        console.log('Not that cold');
    } else if (windChill < -60) {
        console.log('Get to the cabin quickly!');
    } else {
        console.log('Winter is coming.')
    }
```

Please refer to Wikipedia for detailed explanations of each type of [apparent temperatures](https://en.wikipedia.org/wiki/Apparent_temperature).

All `pogoda` functions accept temperature in Celsius degrees, relative humidity in range of 0..1 and wind speed in meters per seconds (except `pogoda.windChillIndex.customaryUnits` which accepts Fahrenheits and miles per hour).

## Contribution

Almost any weather-related contribution is welcome. Please try to run `npm test` before creating pull-request.

## Misc

'Pogoda' means 'weather' in Polish (also in Russian and Ukrainian).



