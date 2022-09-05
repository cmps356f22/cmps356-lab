const list = [1, 2, 1, 1, 3, 5, 3];
// [[1, 3], [2, 1], [3, 2], [5, 1]]

const f = (result, value) => {
  // check if the value is found in result
  const index = result.findIndex(ele => ele[0] === value);

  if (index !== -1) { // if found
    result[index][1] += 1;
  } else { // otherwise
    result.push([value, 1]);
  }

  return result;
};
console.log(list.reduce(f, []));

// result = [
//   { value: 1, count: 3 },
//   { value: 2, count: 2 },
//   { value: 3, count: 2 },
//   { value: 5, count: 1 }
// ];

const f2 = (result, value) => {
  // check if the value is found in result
  const index = result.findIndex(ele => ele.value === value);

  if (index !== -1) { // if found
    result[index].count += 1;
  } else { // otherwise
    result.push({ value: value, count: 1 });
  }

  return result;
};
console.log(list.reduce(f2, []));

// result = {
//   1: 3, 2: 2, 3: 2, 5: 1
// };

const f3 = (result, value) => {
  // check if the value is found in result

  if (value in result) { // if found
    result[value] += 1;
  } else { // otherwise
    result[value] = 1;
  }

  return result;
};
const result = list.reduce(f3, {});
console.log(list.reduce(f3, {}));

console.log(Object.keys(result).map(key => [key, result[key]]));
