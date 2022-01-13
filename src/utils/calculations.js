export function priceCalculation(amount) {
  const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const coinsCount = [];

  denominations.map((coin) => {
    coinsCount.push(Math.floor(amount / coin));
    amount = amount % coin;
  });
  return denominations.reduce((calculateDenomination, coin, i) => {
    calculateDenomination[coin] = coinsCount[i];
    return calculateDenomination;
  }, {});
}
