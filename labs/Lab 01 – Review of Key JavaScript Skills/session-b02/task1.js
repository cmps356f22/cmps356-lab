// total of a list
const list = [1,2,3,4];
const f = (result, value) => result + value;
console.log(list.reduce(f, 0));

// max of a list
const list2 = [1,2,3,4];
const f2 = (result, value) => result < value ? value : result;
console.log(list.reduce(f2, -Infinity));

// return the list
const list3 = [1,2,3,4];
const f3 = (result, value) => result = [...result, value];
console.log(list.reduce(f3, []));

// reverse the list
const list4 = [1,2,3,4];
const f4 = (result, value) => result = [value, ...result];
console.log(list.reduce(f4, []));
