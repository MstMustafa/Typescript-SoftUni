function composeCalorieObject(input) {
    var calorieObject = {};
    for (var i = 0; i < input.length; i += 2) {
        var food = input[i];
        var calories = Number(input[i + 1]);
        calorieObject[food] = calories;
    }
    return calorieObject;
}
console.log(composeCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
