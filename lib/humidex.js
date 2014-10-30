'use strict';

var dewPoint = require('./dewPoint');

function fromDewPoint (temperature, dewPoint) {
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
            5417.7530 * ((1 / 273.16) - (1 / dewPointK))
        );

    var h = 0.5555 * (e - 10);

    return temperature + h;
}

/**
 * Humidex is "humidity index", integral parameter describing how hot it is. Quoting wikipedia, humidex of at least 30
 * causes "some discomfort", at least 40 causes "great discomfort" and above 45 is "dangerous". When the humidex hits 54,
 * heat stroke is imminent.
 * @param {Number} temperature °C
 * @param {Number} relativeHumidity 0..1
 *
 */
function humidex (temperature, relativeHumidity) {
    if (arguments.length < 2) {
        throw new Error('Not enough arguments');
    }

    if (typeof temperature !== 'number' || isNaN(temperature)) {
        throw new TypeError('Invalid temperature value: ' + temperature);
    }

    if (temperature < -273.15) {
        throw new RangeError('Temperature is below absolute zero: "' + temperature + '". Are you in other universe?');
    }

    if (typeof relativeHumidity !== 'number' || isNaN(relativeHumidity)) {
        throw new TypeError('Invalid relativeHumidity value: ' + relativeHumidity);
    }

    if (relativeHumidity < 0 || relativeHumidity > 1) {
        throw new RangeError('Relative humidity exceeds 1 or is below 0.');
    }

    var dp = dewPoint(temperature, relativeHumidity);

    return fromDewPoint(temperature, dp);
}

/**
 * This version calculates humidex basing on pre-calculated dew point
 * @param {Number} temperature °C
 * @param {Number} dewPoint °C
 * @return {Number}
 */
humidex.fromDewPoint = fromDewPoint;

module.exports = humidex;