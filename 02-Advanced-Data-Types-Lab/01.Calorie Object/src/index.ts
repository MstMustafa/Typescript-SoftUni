function composeCalorieObject(input: string[]): { [key: string]: number } {
    const calorieObject: { [key: string]: number } = {};

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i];
        const calories = Number(input[i + 1]); 
        calorieObject[food] = calories;
    }

    return calorieObject;
}

console.log(composeCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));