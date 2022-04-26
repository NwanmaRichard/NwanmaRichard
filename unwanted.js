//const unwanted = (arr) => {

//};


let array = [0, 1, false, 2, undefined, "", 3, null];
const dele = array.filter((i) =>{
    return typeof i != Number
})
console.log(dele)