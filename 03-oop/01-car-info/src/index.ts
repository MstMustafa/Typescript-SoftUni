class Car {

    public brand:string;
    public model:string;
    public horsepower:number;

    constructor(brand:string,model:string,horsepower:number){
           this.brand = brand;
           this.model = model;
           this.horsepower=horsepower;
    }

    get Brand(): string {
        return this.brand;
    }

    set Brand(value: string) {
        this.brand = value;
    }


    get Model(): string {
        return this.model;
    }

    set Model(value: string) {
        this.model = value;
    }


    get Horsepower(): number {
        return this.horsepower;
    }

    set Horsepower(value: number) {
        this.horsepower = value;
    }
    
}


function carCreate(input:string):string{
    const [brand,model,horsepowerStr] = input.split(" ");
    const horsepower = Number(horsepowerStr);
    const car = new Car(brand, model, horsepower); 
    return `The car is: ${car.Brand} ${car.Model} – ${car.Horsepower} HP.`; 

}


const input = "Skoda Karoq 150";
const car = carCreate(input); 
console.log(car);