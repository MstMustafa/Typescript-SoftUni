function towns(input:string[]):void{
    input.forEach(row=>{
        const [town, latitude, longitude] = row.split(' | ').map(value => value.trim());

        const formattedLatitude = Number(latitude).toFixed(2);
        const formattedLongitude = Number(longitude).toFixed(2);

        const townObject = {
            town: town,
            latitude: formattedLatitude,
            longitude: formattedLongitude
          };

          console.log(townObject);
    })

    
}
const input = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];
  
  
towns(input);