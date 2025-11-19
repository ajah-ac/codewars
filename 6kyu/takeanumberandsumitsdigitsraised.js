/*The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89=8^1+9^2
The next number in having this property is 135

See this property again: 135:1^1 +3^2+5^3=135


Task
We need a function to collect these numbers, that may receive two integers 
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89] */
function sumDigPow(a,b) {
  const interval=[]
for(let i=a;i<=b;i++)interval.push(i)  //
  
  const result=[]
for(let num of interval){
  if(num.toString().length===1) result.push(Number(num))

  else{
     const nums=[...(num.toString())].map((x,i)=>x**(i+1)).reduce((a,c)=>a+c,0)
     if((nums)===num)result.push(num)}
  }

  return result
}
console.log(sumDigPow(1,150))
