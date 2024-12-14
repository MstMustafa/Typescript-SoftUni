function towns(input) {
    input.forEach(function (row) {
        var _a = row.split(' | ').map(function (value) { return value.trim(); }), town = _a[0], latitude = _a[1], longitude = _a[2];
        var formattedLatitude = Number(latitude).toFixed(2);
        var formattedLongitude = Number(longitude).toFixed(2);
        var townObject = {
            town: town,
            latitude: formattedLatitude,
            longitude: formattedLongitude
        };
        console.log(townObject);
    });
}
var input = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];
towns(input);
