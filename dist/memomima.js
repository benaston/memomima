;(function(root) {

	'use strict';

	var namespace = {};

	;(function(namespace) {

    'use strict';

    var memory = {};

    function hasher(args) {
        return args.reduce(function(p, c, i) {
            return p + JSON.stringify(c);
        }, '.');
    }

    function memoize(fn, target) {
        if (fn == null) {
            return fn;
        }

        if (typeof fn !== 'function') {
            return fn;
        }

        var memoized = function() {
            var hash = hasher(Array.prototype.slice.call(arguments));

            if (memory.hasOwnProperty(hash)) {
                return memory[hash];
            }

            memory[hash] = fn.apply(target, arguments);

            return memory[hash];
        };

        return memoized;
    }


    namespace.memoize = memoize;

}(namespace));

	if ((typeof exports === 'object') && module) {
		module.exports = namespace; // CommonJS
	} else if ((typeof define === 'function') && define.amd) {
		define(function() {
			return namespace;
		}); // AMD
	} else {
		root.memomima = namespace; // Browser
	}

}(this));