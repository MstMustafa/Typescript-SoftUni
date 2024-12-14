function aggregateElements(elements: number[]): void {
    
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        sum += elements[i];
    }

    
    let sumInverse = 0;
    for (let i = 0; i < elements.length; i++) {
        sumInverse += 1 / elements[i];
    }

    
    let concat = '';
    for (let i = 0; i < elements.length; i++) {
        concat += elements[i].toString();
    }

    
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

const input1 = [1, 2, 3];
aggregateElements(input1);