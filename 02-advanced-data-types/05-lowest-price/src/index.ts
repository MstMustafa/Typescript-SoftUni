function lowestPrices(data:string[]):void{

    const productList: { product: string, town: string, price: number }[] = [];
    
    for (const entry of data) {
        const [town, product, priceStr] = entry.split(" | ");
        const price = parseFloat(priceStr);

        let existingProduct = null;
        for (const p of productList) {
            if (p.product === product) {
                existingProduct = p;
                break;
            }
        }

        if (!existingProduct || price < existingProduct.price) {
            if (existingProduct) {
                existingProduct.town = town;
                existingProduct.price = price;
            } else {
                productList.push({ product, town, price });
            }
        }
    }
    
    for (const { product, town, price } of productList) {
        console.log(`${product} -> ${price} (${town})`);
    }

}

const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

lowestPrices(input);