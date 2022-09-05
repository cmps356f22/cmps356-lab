const list = [1, 2, 3];
const reverseList = list.reduce((acc, ele) => [ele, ...acc], []);
console.log(reverseList);
