/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(arr) {
  if (arr.length === 0) {
    return null; // Handle empty arrays
  }

  let largest = arr[0]; // Assume the first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example usage:
const numbers = [3, 7, 2, 9, 1];
const largestNumber = findLargestElement(numbers);
console.log(largestNumber); // Output: 9


