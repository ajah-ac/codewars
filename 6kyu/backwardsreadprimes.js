/**Backwards-read-primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:

13 17 31 37 71 73
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards-read-primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers. */
function backwardsPrime(start, stop){
  const isPrime=(n)=>{
   if (n <= 1) return false;       
    for (let i = 2; i*i <= n; i++) { 
        if (n % i === 0) return false; 
    }
    return true;
  }

  

  const nums=[]
  for(let i=start;i<=stop;i++){
    if(isPrime(i))
      nums.push(i)
  }
  
  
return nums.filter(num=>num!==(+num.toString().split('').reverse().join('')) && isPrime(+(num.toString().split('').reverse().join(''))))


}