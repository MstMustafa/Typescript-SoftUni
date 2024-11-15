function biggerHalf(numbers) {
    numbers.sort(function (a, b) { return a - b; });
    var startIndex = Math.floor(numbers.length / 2);
    return numbers.slice(startIndex);
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
