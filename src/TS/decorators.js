// Helper function to create a method decorator
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    if (typeof originalMethod === 'function') {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Calling method ".concat(key.toString(), " with arguments: ").concat(JSON.stringify(args)));
            var result = originalMethod.apply(this, args);
            console.log("Method ".concat(key.toString(), " returned: ").concat(JSON.stringify(result)));
            return result;
        };
    }
    return descriptor;
}
var Example = /** @class */ (function () {
    function Example() {
    }
    ////@logMethod
    Example.prototype.add = function (a, b) {
        return a + b;
    };
    //@logMethod
    Example.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Example;
}());
var example = new Example();
var sum3 = example.add(3, 5);
console.log("Sum: ".concat(sum3));
var difference = example.subtract(8, 3);
console.log("Difference: ".concat(difference));
