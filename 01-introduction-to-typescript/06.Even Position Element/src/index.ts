function evenPositionElements(arr: string[]): string {
    const result: string[] = [];
    
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    
    return result.join(" ");
}



const output1 = evenPositionElements(['20', '30', '40', '50', '60']);
console.log(output1);