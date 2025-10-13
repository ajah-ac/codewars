/*rogram a function sumAverage(arr) where arr is an array containing arrays full of numbers.

First, determine the average of each array. Then, return the sum of all the averages.

All numbers will be less than 100 and greater than -100.
arr will contain a maximum of 50 arrays.
After calculating all the averages, add them all together, then round down, as shown in the example below:
The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

 */
const sumAverage = (arr) => {
  const result=[]
  for(let  array of arr){ result.push(array.reduce((a,c)=>a+c,0)/array.length)}
  return Math.floor(result.reduce((a,c)=>a+c,0));
}