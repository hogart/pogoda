var humidex = require('../../pogoda').humidex;
var assert = require('chai').assert;

describe('humidex', function() {
    it('should throw Error when called with insufficient arguments', function () {
        assert.throw(humidex.bind(null), Error);
        assert.throw(humidex.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(humidex.bind(null, undefined, 0.5), TypeError);
        assert.throw(humidex.bind(null, 24, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(humidex.bind(null, -500, 0.5), RangeError);
        assert.throw(humidex.bind(null, -50, 1.5), RangeError);
        assert.throw(humidex.bind(null, -50, -0.1), RangeError);
    });

    it('should return numeric values', function () {
        assert.isNumber(humidex(12, 0.5));
    });
});

describe('humidex.fromDewPoint', function () {
    var fdp = humidex.fromDewPoint;

    it('should throw Error when called with insufficient arguments', function () {
        assert.throw(fdp.bind(null), Error);
        assert.throw(fdp.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(fdp.bind(null, undefined, 0.5), TypeError);
        assert.throw(fdp.bind(null, 24, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(fdp.bind(null, -500, 0.5), RangeError);
    });

    it('should return numeric values', function () {
        assert.isNumber(fdp(12, 0.5));
    });

    it('results should be close enough to reference', function () {
        assert.closeTo(fdp(30, 15), 34, 1);
        assert.closeTo(fdp(30, 25), 42, 1);
    });
});