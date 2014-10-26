'use strict';

var vaporPressure = require('./vaporPressure');

/**
 * Australian apparent temperature, http://www.bom.gov.au/info/thermal_stress/#atapproximation
 * @param {Number} temperature °C
 * @param {Number} relativeHumidity 0..1
 * @param {Number} windSpeed meters per second
 * @return {Number}
 */
module.exports.australianApparentTemperature = function australianApparentTemperature (temperature, relativeHumidity, windSpeed) {
    if (arguments.length < 3) {
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

    if (typeof windSpeed !== 'number' || isNaN(windSpeed)) {
        throw new TypeError('Invalid wind speed: ' + windSpeed);
    }

    var e = vaporPressure(temperature, relativeHumidity);

    return temperature + (0.33 * e) - (0.70 * windSpeed) -4.00;
};

/**
 * North American and United Kingdom wind chill index
 * @param {Number} temperature °C
 * @param {Number} windSpeed m/s
 * @return {Number}
 */
module.exports.windChillIndex = function windChillIndex (temperature, windSpeed) {
    if (arguments.length < 2) {
        throw new Error('Not enough arguments');
    }

    if (typeof temperature !== 'number' || isNaN(temperature)) {
        throw new TypeError('Invalid temperature value: ' + temperature);
    }

    if (temperature < -273.15) {
        throw new RangeError('Temperature is below absolute zero: "' + temperature + '". Are you in other universe?');
    }

    if (typeof windSpeed !== 'number' || isNaN(windSpeed)) {
        throw new TypeError('Invalid wind speed: ' + windSpeed);
    }

    var windSpeedInKilometers = windSpeed * 1000 / 3600;
    return 13.12 + (0.6215 * temperature) - 11.37 * Math.pow(windSpeedInKilometers, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
};