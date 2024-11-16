var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, ", age ").concat(this.age, " says Meow"));
    };
    return Cat;
}());
function createCats(catData) {
    catData.forEach(function (catEntry) {
        var _a = catEntry.split(' '), name = _a[0], age = _a[1];
        var cat = new Cat(name, Number(age));
        cat.meow();
    });
}
createCats(['Mellow 2', 'Tom 5']);
