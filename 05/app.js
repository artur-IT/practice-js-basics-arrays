const numbers = [1, 2, 3, 4, 5, 6, 7];

sum = () => {
  const evenTab = numbers.filter((number) => number % 2);
  const sum = evenTab.reduce((accumulator, item) => accumulator + item);
  console.log(evenTab);
  return sum;
};

console.log(sum());
// sum()
