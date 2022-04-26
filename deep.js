const plain = (arr) => {
  return arr.flat(3);
};
let array = [1, 2, [3, 4, [5]]];
console.log(plain(array));
//I created a function named plain that takes in an array and i used the flat() method on the array
