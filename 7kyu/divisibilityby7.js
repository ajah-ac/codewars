/*A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, 
subtract twice the last digit from the number formed by the remaining digits. 
Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because 
you are supposed to know if a number of at most 2 digits is divisible by 7 or not.
The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.

Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7. */
const seven=m=>{
  let counts=0
while( m>99){
 const x=String(m).split("")
  const last =+(x[x.length-1])
   const rest=+(x.slice(0,-1).join(""))
   m=rest-(last*2)
  counts++
}
return [m,counts]

}