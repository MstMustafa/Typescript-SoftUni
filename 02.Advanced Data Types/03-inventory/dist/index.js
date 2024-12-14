function heroRegister(input) {
    var heroes = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var line = input_1[_i];
        var _a = line.split(" / "), name_1 = _a[0], level = _a[1], items = _a[2];
        heroes.push({
            name: name_1,
            level: Number(level),
            items: items ? items.split(", ") : [],
        });
    }
    heroes.sort(function (a, b) { return a.level - b.level; });
    for (var _b = 0, heroes_1 = heroes; _b < heroes_1.length; _b++) {
        var hero = heroes_1[_b];
        console.log("Hero: ".concat(hero.name));
        console.log("level => ".concat(hero.level));
        console.log("items => ".concat(hero.items.join(", ")));
    }
}
var input = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];
heroRegister(input);
