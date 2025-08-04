function countBits(n) {
const bits=n.toString(2)
  return Array.from(bits).reduce((a,b)=>a+((+b)===1),0);
}
console.log(countBits(123))