const duplicates = arr =>{
    return [...new Set(arr)]
}
let array = [1, 2, 3, 1, 2];

console.log(duplicates(array));

//I created a function called duplicates that takes an array and i used the new Set() method on the array together with a spread operator which gives an array without duplicate values