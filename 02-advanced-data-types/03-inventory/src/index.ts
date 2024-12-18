type hero ={
    name: string;
    level: number;
    items: string[];
};

function heroRegister(input:string[]):void{
    const heroes : hero[] = []

    for (const line of input) {
        const [name, level, items] = line.split(" / ");
        heroes.push({
          name,
          level: Number(level),
          items: items ? items.split(", ") : [],
        });
    }  

    heroes.sort((a, b) => a.level - b.level);

  
  for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }


}

const input = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];
  
  
heroRegister(input);