// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half


}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length || j < arrB.length) {
    if (j === arrB.length || arrA[i] < arrB[j]) {
      newArr.push(arrA[i]);
      i++;
    }
    else {
      newArr.push(arrB[j]);
      j++;
    }
  }

  return newArr;
  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];
