function sumOfNumbers(n, m) {
    var start = Number(n);
    var end = Number(m);
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers('-8', '20'));
