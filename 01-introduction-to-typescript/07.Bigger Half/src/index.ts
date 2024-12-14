function biggerHalf(numbers: number[]): number[] {
    
    numbers.sort((a, b) => a - b);
    
    const startIndex = Math.floor(numbers.length / 2);

    return numbers.slice(startIndex);
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));