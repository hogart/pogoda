var windChill = require('../../pogoda').windChill;
var assert = require('chai').assert;

describe('windChill.australianApparentTemperature', function() {
    var aTT = windChill.australianApparentTemperature;

    it('should throw Error when called with isufficient arguments', function () {
        assert.throw(aTT.bind(null), Error);
        assert.throw(aTT.bind(null, 1), Error);
        assert.throw(aTT.bind(null, 1, 2), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(aTT.bind(null, undefined, 1, 1), TypeError);
        assert.throw(aTT.bind(null, 1, null, 1), TypeError);
        assert.throw(aTT.bind(null, 1, 1, {}), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(aTT.bind(null, -500, .5, 1), RangeError);
        assert.throw(aTT.bind(null, -195.75, -0.1, 1), RangeError);
        assert.throw(aTT.bind(null, -195.75, 1.1, 1), RangeError);
    });

    it('should return numeric values', function () {
        assert.typeOf(aTT(12, .5, 1), 'number');
    });
});

describe('windChill.windChillIndex', function() {
    var wc = windChill.windChillIndex;

    it('should throw Error when called with isufficient arguments', function () {
        assert.throw(wc.bind(null), Error);
        assert.throw(wc.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(wc.bind(null, undefined, 1), TypeError);
        assert.throw(wc.bind(null, 1, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(wc.bind(null, -500, .5), RangeError);
    });

    it('should return numeric values', function () {
        assert.typeOf(wc(12, 1), 'number');
    });
});