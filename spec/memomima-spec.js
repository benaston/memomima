'use strict';

var memoize = self.memomima.memoize;

describe('memoize', function() {

    describe('when supplied with undefined', function() {

        it('should return undefined', function() {
            //arrange && act
            var result = memoize(undefined);

            //assert
            expect(result).toBe(undefined);
        });

    });

    describe('when supplied with null', function() {

        it('should return null', function() {
            //arrange && act
            var result = memoize(null);

            //assert
            expect(result).toBe(null);
        });

    });

    describe('when supplied with an object other than a function', function() {

        [{}, 1, 'foo', [1, 2]].forEach(function(testCase) {

            it('should return the non-function', function() {
                //arrange & act
                var result = memoize(testCase);

                //assert
                expect(result).toBe(testCase);
            });

        });

    });

    describe('when supplied with a function', function() {

        it('should return the memoised version of it', function() {
            //arrange
            var o, fn;

            o = {
            	foo: function() {}
            };
            spyOn(o, 'foo').and.callThrough();            
            function fn() { return o.foo(); }

            //act & assert
            fn();
            fn();
            expect(o.foo.calls.count()).toBe(2);

            fn = memoize(fn);
            fn();
            fn();
            expect(o.foo.calls.count()).toBe(3); // Not 4!
        });

    });

});