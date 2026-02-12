/* Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in an array of positive numbers.

Rick is only interested in solutions that are faster than his, which has a running time of O(n log n). */
function maxProduct(a) {
  const first=Math.max(...a)
  const nums=a.slice(0,a.indexOf(first)).concat(a.slice(a.indexOf(first)+1))
  const second=Math.max(...nums)
  return second*first
  
}