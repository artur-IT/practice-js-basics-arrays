const n = 100;
const oddNumbers = [];

fillArrayOddNumbers = () => {
  for (i = 0; i < n; i++) {
    const number = (Math.random() * n).toFixed();
    if (number % 2 !== 0) oddNumbers[i] = number;
    else i--;
  }
};

fillArrayOddNumbers();
console.log(oddNumbers);
