/*You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values. */
const arraySum=arr=> {
return arr.flat(Infinity).reduce((a,c)=>a+(typeof c==='number'?c:0),0)
}