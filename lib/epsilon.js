'use strict';

/**
 * Compares two values for equality within epsilon.
 * @param {Number} val1
 * @param {Number} val2
 * @param {Number} epsilon
 * @return {Number} `-1` if `val1` lesser, `0` if values are equal, `1` if `val1` is greater
 */
function compareEpsilon (val1, val2, epsilon) {
    if (Math.abs(val1 - val2) < epsilon) {
        return 0;
    } else if (val1 < val2) {
        return -1;
    } else {
        return 1;
    }
}

/**
 * Compares two values for equality within epsilon.
 * @param {Number} val1
 * @param {Number} val2
 * @param {Number} epsilon
 * @return {Boolean}
 */
function equal (val1, val2, epsilon) {
    return compareEpsilon(val1, val2, epsilon) === 0;
}

module.exports.compareEpsilon = compareEpsilon;
module.exports.equal = equal;