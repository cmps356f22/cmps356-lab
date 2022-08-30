// reverse
const list1 = [1,2,3,4];
const f1 = (result, value) => result = [value, ...result];
console.log(list1.reduce(f1, []));

// sum
const list2 = [1,2,3,4];
const f2 = (result, value) => result = result + value;
console.log(list2.reduce(f2, 0));

// max
const list3 = [1,2,3,4];
const f3 = (result, value) => result = result > value ? result : value;
console.log(list3.reduce(f3, -Infinity));
