// tally a list
const list = [1, 2, 1, 3, 1, 2, 2, 4, 6];
// [[1, 3], [2, 3], [3, 1], [4, 1], [6, 1]]
const f = (result, value) => {
  // index of value in result
  const index = result.findIndex(ele => value === ele[0]);

  // value found
  if (index !== -1) {
    result[index][1] += 1;
  } else {// otherwise
    result.push([value, 1]);
  }

  return result;
};
console.log(list.reduce(f, []));

const list2 = [1, 2, 1, 3, 1, 2, 2, 4, 6];
// [
//   { value: 1, count: 3 },
//   { value: 2, count: 3 },
//   { value: 3, count: 1 },
//   { value: 4, count: 1 },
//   { value: 6, count: 1 }
// ]
const f2 = (result, value) => {
  // index of value in result
  const index = result.findIndex(ele => value === ele.value);

  // value found
  if (index !== -1) {
    result[index].count += 1;
  } else {// otherwise
    result.push({ value: value, count: 1 });
  }

  return result;
};
console.log(list2.reduce(f2, []));

const list3 = [1, 2, 1, 3, 1, 2, 2, 4, 6];
// { 1: 3,  2: 3, 3: 1, 4: 1, 6: 1};

const f3 = (result, value) => {
  /*
  // value found
  if (value in result) {
    result[value] += 1;
  } else {// otherwise
    result[value] = 1;
  }
  */

  // result[value] = (result[value] ?? 0) + 1;
  result[value] = (result[value] ? result[value] : 0) + 1;
  return result;
};
console.log(list3.reduce(f3, {}));
