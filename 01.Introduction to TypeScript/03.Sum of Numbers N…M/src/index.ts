function sumOfNumbers(n: string, m: string): number {
    const start = Number(n);
    const end = Number(m);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbers('-8', '20'));