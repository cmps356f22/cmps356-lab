// total of an array
const list = [1,2,3,4];
const f = (result, value) => result + value;

console.log(list.reduce(f, 0));

// max of an array
const list2 = [1,2,3,4];
const f2 = (result, value) => result < value ? value : result;

console.log(list2.reduce(f2, -Infinity));

// the same list
const list3 = [1,2,3,4];
const f3 = (result, value) => [...result, value];

console.log(list3.reduce(f3, []));

// reverse the list
const list4 = [1,2,3,4];
const f4 = (result, value) => [value, ...result];

console.log(list4.reduce(f4, []));
