const years = [1980, 1934, 2002, 2019];

const thisYear = new Date().getFullYear();
const pastYears = years.map((year) => thisYear - year);

console.log(pastYears);
