// Problem Statement — Given an array of integers, return indices of the two numbers such that they add up to a specific target.

const twoNumberSum = (arr, test) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === test) {
        return true
      }
    }
    return false
  }
};

arr = [1, 2, 3,4];
test = 3;

console.log(twoNumberSum(arr, test));
