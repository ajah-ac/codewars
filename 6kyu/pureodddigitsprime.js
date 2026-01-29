/* Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive a positive integer n >= 3, and output a list with three values:

[number pure odd digit primes less than or equal to n, largest pure odd digit prime smaller than or equal to n, smallest pure odd digit prime larger than n]
Let's see some cases: */
function onlyOddDigPrimes(n) {
  
  const isPureOddPrime=(num)=>{
   if (num <= 1) return false;       
    for (let i = 2; i*i <= num; i++) if (num % i === 0) return false; 
  return [...num.toString()].every(num=>(+num)%2!==0)
 }
    
  
const values=[]
  let i=2
  while(values.length===0 || values[values.length-1]<=n){ 
    if(i===n)values.push(i)
    if(isPureOddPrime(i)) values.push(i)
    i++
  }
  
  const belowSum=values.filter(num=>num<n).length
  const index=values.indexOf(n)
  const nearestLeft=values[index-1]
  const nearestRight=values[index+1]
  
  
return  [belowSum,nearestLeft,nearestRight]

}