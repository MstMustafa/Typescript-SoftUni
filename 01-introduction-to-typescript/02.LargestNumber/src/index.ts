function findLargestNumber(num1: number, num2: number, num3: number): number {
    return Math.max(num1, num2, num3);
}

const largest = findLargestNumber(5, -3, 16);
console.log(`The largest number is ${largest}.`);