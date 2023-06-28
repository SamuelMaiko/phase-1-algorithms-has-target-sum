function hasTargetSum(array, target) {
  // Write your algorithm here
  for (const item of array){
    //take the index of the current item
    let counter =array.indexOf(item);
    let newArray=[...array];
    newArray.splice(counter, 1); // remove the current item from the array
  //iterate through new array adding the current item to the elements of new array
    for (const item2 of newArray){
      let sum=item+item2;
     
      switch(true){
        case sum===target: return true;
      }
    }

  }
  //if the return in the iteration is not triggered then it will return false
return false;
}

console.log(hasTargetSum([1, 2, 5], 4))

/* 
  Write the Big O time complexity of your function here
*/
/*
Write in your words

I should declare a function that takes two parameters: an array and an integer. If any numbers in the array add up to the integer, the
function returns true and returns false otherwise.

*/

/* 
  Add your pseudocode here

  if the any pair of numbers in the array add up to the target integer,
  return true
  else
  return false

*/

/*
  Add written explanation of your solution here

  Take the array and iterate through it using for loop, create a new array and delete the current element from it,
  iterate through the new array and add the element from the first iteration to each element of the new array ,
  if the sum is equal to the target integer return true, otherwise wait till the end of all the iterations have ended and return false 
  at the end of the function 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
