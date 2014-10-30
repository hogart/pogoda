var dewPoint = require('../../pogoda').dewPoint;
var assert = require('chai').assert;

describe('dewPoint', function() {
    it('should throw Error when called with insufficient arguments', function () {
        assert.throw(dewPoint.bind(null), Error);
        assert.throw(dewPoint.bind(null, 1), Error);
    });

    it('should throw TypeError when called with non-numeric values', function () {
        assert.throw(dewPoint.bind(null, undefined, 0.5), TypeError);
        assert.throw(dewPoint.bind(null, 24, null), TypeError);
    });

    it('should throw RangeError when called with too high or too low values', function () {
        assert.throw(dewPoint.bind(null, -500, 0.5), RangeError);
        assert.throw(dewPoint.bind(null, -195.75, -0.1), RangeError);
        assert.throw(dewPoint.bind(null, -195.75, 1.1), RangeError);
    });

    // reference values taken from this table: https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%87%D0%BA%D0%B0_%D1%80%D0%BE%D1%81%D1%8B
    it('results should be close enough to reference table', function () {
        assert.closeTo(dewPoint(0, 0.2), -20, 1);
        assert.closeTo(dewPoint(12.5, 0.2), -9.8, 1);
        assert.closeTo(dewPoint(25, 0.2), -0.5, 1);

        assert.closeTo(dewPoint(0, 0.6), -6.8, 1);
        assert.closeTo(dewPoint(12.5, 0.6), 5.0, 1);
        assert.closeTo(dewPoint(25, 0.6), 16.7, 1);

        assert.closeTo(dewPoint(0, 1), 0, 1);
        assert.closeTo(dewPoint(12.5, 1), 12.5, 1);
        assert.closeTo(dewPoint(25, 1), 25, 1);
    });
});