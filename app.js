let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return Number(valueInDollar);
}

const fromDollarToYen = function (dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    let yenAmount = euroAmount * oneEuroIs.JPY
    return Number(yenAmount.toFixed(1))
}

const fromYenToPound = function (yenAmount){
    let euroAmount = yenAmount / oneEuroIs.JPY;
    let poundAmount = euroAmount * oneEuroIs.GBP
    return Number(poundAmount.toFixed(3))
}
console.log(fromYenToPound(fromDollarToYen(fromEuroToDollar(3.5))));

console.log(typeof fromEuroToDollar(1));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }