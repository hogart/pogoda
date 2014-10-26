'use strict';

/**
 * Converts relative humidity to vapor pressure in hPas
 * @param {Number} temperature °C
 * @param {Number} relativeHumidity 0..1
 * @return {Number}
 */
module.exports = function vaporPressure (temperature, relativeHumidity) {
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

    return relativeHumidity * 6.105 * Math.exp(17.27 * temperature / (237.7 + temperature));
};