function lowestPrices(data) {
    var productList = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var entry = data_1[_i];
        var _a = entry.split(" | "), town = _a[0], product = _a[1], priceStr = _a[2];
        var price = parseFloat(priceStr);
        var existingProduct = null;
        for (var _b = 0, productList_1 = productList; _b < productList_1.length; _b++) {
            var p = productList_1[_b];
            if (p.product === product) {
                existingProduct = p;
                break;
            }
        }
        if (!existingProduct || price < existingProduct.price) {
            if (existingProduct) {
                existingProduct.town = town;
                existingProduct.price = price;
            }
            else {
                productList.push({ product: product, town: town, price: price });
            }
        }
    }
    for (var _c = 0, productList_2 = productList; _c < productList_2.length; _c++) {
        var _d = productList_2[_c], product = _d.product, town = _d.town, price = _d.price;
        console.log("".concat(product, " -> ").concat(price, " (").concat(town, ")"));
    }
}
var input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];
lowestPrices(input);
