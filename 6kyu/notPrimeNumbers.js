/* You are given two positive integers a and b(a < b <= 20000).
Complete the function which returns a list of all those numbers in the interval[a, b) 
whose digits are made up of prime numbers(2, 3, 5, 7) but which are not primes themselves.
Be careful about your timing! */
function notPrimes(a,b){
   const isPrime=(n)=>{
   if (n <= 1) return false;       
    for (let i = 2; i*i <= n; i++) { 
        if (n % i === 0) return false; 
    }
    return true;
  }
const madeOfPrimes=x=>x.toString().split('').every(isPrime)

  const notPrimes=[]
  for(let i=a;i<b;i++){
    if(madeOfPrimes(i) && !isPrime(i))
      notPrimes.push(i)
  }

return notPrimes
}
