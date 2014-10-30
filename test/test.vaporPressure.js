var vaporPressure = require('../../pogoda').vaporPressure;
var assert = require('chai').assert;

describe('vaporPressure', function() {
    it('should throw Error when called with isufficient arguments', function () {
        assert.throw(vaporPressure.bind(null), Error);
        assert.throw(vaporPressure.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(vaporPressure.bind(null, undefined, 0.5), TypeError);
        assert.throw(vaporPressure.bind(null, 24, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(vaporPressure.bind(null, -500, 0.5), RangeError);
        assert.throw(vaporPressure.bind(null, -195.75, -0.1), RangeError);
        assert.throw(vaporPressure.bind(null, -195.75, 1.1), RangeError);
    });

    it('should return numeric values', function () {
        assert.typeOf(vaporPressure(12, 0.5), 'number');
    });
});