'use strict';

/**
 * Humidex is "humidity index", integral parameter describing how hot it is. Quoting wikipedia, humidex of at least 30
 * causes "some discomfort", at least 40 causes "great discomfort" and above 45 is "dangerous". When the humidex hits 54,
 * heat stroke is imminent.
 * @param {Number} temperature °C
 * @param {Number} dewPoint °C
 * @return {Number}
 */
module.exports = function humidex (temperature, dewPoint) {
    if (arguments.length < 2) {
        throw new Error('Not enough arguments');
    }

    if (typeof temperature !== 'number' || isNaN(temperature)) {
        throw new TypeError('Invalid temperature value: ' + temperature);
    }

    if (temperature < -273.15) {
        throw new RangeError('Temperature is below absolute zero: "' + temperature + '". Are you in other universe?');
    }

    if (typeof dewPoint !== 'number' || isNaN(dewPoint)) {
        throw new TypeError('Invalid dew point: ' + dewPoint);
    }

    var dewPointK = dewPoint + 273.15;

    var e = 6.11 * Math.exp(
        5417.7530 * ((1/273.16) - (1/dewPointK))
    );

    var h = 0.5555 * (e - 10);

    return temperature + h;
};