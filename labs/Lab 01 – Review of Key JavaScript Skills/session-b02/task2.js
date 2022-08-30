const list = [1, 1, 4, 3, 3, 2, 3, 6];
const f = (result, value) => {
  // check if value is already in result
  const index = result.findIndex((element) => element[0] === value);

  // if found
  if (index !== -1) {
    result[index][1] += 1;
  } else { // otherwise
    result.push([value, 1]);
  }

  return result;
};
console.log(list.reduce(f, []));

const list2 = [1, 1, 4, 3, 3, 2, 3, 6];
const f2 = (result, value) => {
  // check if value is already in result
  const index = result.findIndex((element) => element.value === value);

  // if found
  if (index !== -1) {
    result[index].count += 1;
  } else { // otherwise
    result.push({ value: value, count: 1 });
  }

  return result;
};
console.log(list2.reduce(f2, []));

const list3 = [1, 1, 4, 3, 3, 2, 3, 6];
const f3 = (result, value) => {
  /*
  // if found
  if (result[value]) {
    result[value] += 1;
  } else { // otherwise
    result[value] = 1;
  }
  */

  result[value] = (result[value] ?? 0) + 1;
  return result;
};
console.log(list3.reduce(f3, {}));
