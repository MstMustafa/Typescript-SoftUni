var Car = /** @class */ (function () {
    function Car(brand, model, horsepower) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }
    Object.defineProperty(Car.prototype, "Brand", {
        get: function () {
            return this.brand;
        },
        set: function (value) {
            this.brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Model", {
        get: function () {
            return this.model;
        },
        set: function (value) {
            this.model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Horsepower", {
        get: function () {
            return this.horsepower;
        },
        set: function (value) {
            this.horsepower = value;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
function carCreate(input) {
    var _a = input.split(" "), brand = _a[0], model = _a[1], horsepowerStr = _a[2];
    var horsepower = Number(horsepowerStr);
    var car = new Car(brand, model, horsepower);
    return "The car is: ".concat(car.Brand, " ").concat(car.Model, " \u2013 ").concat(car.Horsepower, " HP.");
}
var input = "Skoda Karoq 150";
var car = carCreate(input);
console.log(car);
