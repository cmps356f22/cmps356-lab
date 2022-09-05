/*
const list = ['a', 'c', 'a', 'b', 'a', 'a', 'e', 'c', 'b'];

const f = (result, value) => {
  // console.log(result);

  // try and find the element
  // let index = -1;
  // for (let i = 0; i < result.length; ++i) {
  //   if (result[i][0] === value) {
  //     index = i;
  //     break;
  //   }
  // }

  const index = result.findIndex(x => x[0] === value);

  if (index !== -1) { // found, increase count
    result[index][1] += 1;
  } else { // not found, add element with count 1
    result.push([value, 1]);
  }

  return result;
}

const tally = list.reduce((acc, ele) => f(acc, ele), []);
console.log(tally);

// [['a', 4], ['b', 2], ['c', 2], ['e', 1]]

// []
// [['a', 1]]
// [['a', 1], ['c', 1]]
// [['a', 2], ['c', 1]]
*/

// [-1, 0, 1, -1, 1, 1]

// []
// -1 -> [ {value: -1, count: 1} ]
// 0 -> [ {value: -1, count: 1}, {value: 0, count: 1} ]
// 1 -> [ {value: -1, count: 1}, {value: 0, count: 1}, {value: 1, count: 1}]
// 1 -> [ {value: -1, count: 1}, {value: 0, count: 1}, {value: 1, count: 2}]
// -1 -> [ {value: -1, count: 2}, {value: 0, count: 1}, {value: 1, count: 2}]
// 1 -> [ {value: -1, count: 2}, {value: 0, count: 1}, {value: 1, count: 3}]
// 1 -> [ {value: -1, count: 2}, {value: 0, count: 1}, {value: 1, count: 4}]

// [
//   { value: -1, count: 2},
//   { value: 0, count: 1},
//   { value: 1, count: 3},
// ]

const list = ['a', 'c', 'a', 'b', 'a', 'a', 'e', 'c', 'b'];

const tally = list.reduce((result, value) => {
  const index = result.findIndex(el => el.value === value);

  if (index !== -1) {
    result[index].count += 1;
  } else {
    result.push({value: value, count: 1});
  }

  return result;
}, []);

console.log(tally);
