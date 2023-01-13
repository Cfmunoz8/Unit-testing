const sum = (a, b) => {
  return a + b;
};

console.log(sum(7, 3));

let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

const fromEuroToDollar = (valueInEuro) => {
  let valueInDollar = valueInEuro * oneEuroIs.USD;
  return valueInDollar;
};

const fromDollarToYen = (valueInDollar) => {
  let valueInYen = (valueInDollar * oneEuroIs.JPY) / oneEuroIs.USD;
  return valueInYen;
};

console.log(fromDollarToYen(1.2));

const fromYenToPound = (valueInYens) => {
  let valueInPound = (valueInYens * oneEuroIs.GBP) / oneEuroIs.JPY;
  return valueInPound;
};

console.log(fromYenToPound(127.9));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
