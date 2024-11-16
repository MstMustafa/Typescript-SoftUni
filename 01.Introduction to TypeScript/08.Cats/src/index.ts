class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catData: string[]): void {
    catData.forEach(catEntry => {
        const [name, age] = catEntry.split(' ');
        const cat = new Cat(name, Number(age));
        cat.meow();
    });
}

createCats(['Mellow 2', 'Tom 5']);