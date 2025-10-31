/*Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value */
const nthSmallest=(...num)=> {
  const array=[]
  let x
  for(let nums of num)  
  {
    if(Array.isArray(nums)){array.push(nums)}
  else {x=nums}
  }
  const sorted=array.flat(Infinity).sort((a,b)=>a-b)
  return sorted[x-1]
  // Good luck!
}
