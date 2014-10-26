var humidex = require('../../pogoda').humidex;
var assert = require('chai').assert;

describe('humidex', function() {
    it('should throw Error when called with isufficient arguments', function () {
        assert.throw(humidex.bind(null), Error);
        assert.throw(humidex.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(humidex.bind(null, undefined, .5), TypeError);
        assert.throw(humidex.bind(null, 24, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(humidex.bind(null, -500, .5), RangeError);
    });

    it('should return numeric values', function () {
        assert.typeOf(humidex(12, .5), 'number');
    });


    it('results should be close enough to reference', function () {
        assert.closeTo(humidex(30, 15), 34, 1);
        assert.closeTo(humidex(30, 25), 42, 1);
    });
});