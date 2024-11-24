function aggregateElements(elements) {
    var sum = 0;
    for (var i = 0; i < elements.length; i++) {
        sum += elements[i];
    }
    var sumInverse = 0;
    for (var i = 0; i < elements.length; i++) {
        sumInverse += 1 / elements[i];
    }
    var concat = '';
    for (var i = 0; i < elements.length; i++) {
        concat += elements[i].toString();
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}
var input1 = [1, 2, 3];
aggregateElements(input1);
