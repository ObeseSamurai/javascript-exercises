//const filteredArray = array.filter((item) => {

//const array = [1, 2, 3, 3, 4, 6, 6, "hey", "yo"];
//const itemsToDelete = [3];

const removeFromArray = function(array, ...arguments) {
  	const itemsToDelete = [...arguments];
  	const filteredArray = []

    //console.log("Items To Delete: " + itemsToDelete);

    return array.filter(item => !itemsToDelete.includes(item));
}

// console.log("Before:  " + array);
// console.log("After:   " + removeFromArray(array, 3, 5, 6, "hey", "nid", 33));
    //let theyShare = array.some(item => itemsToDelete.includes(item));
  	//console.log( array.filter(item => !itemsToDelete.includes(item)) );
// function haveCommonItems(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item));
// }

// const a = [1, 2, 3];
// const b = [2];

// const result = haveCommonItems(a, b);
// //console.log(!itemsToDelete.includes(22));

// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js