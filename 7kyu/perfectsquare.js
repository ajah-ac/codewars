
/*Complete the findNextSquare method that finds the next integral perfect square after 
the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the argument is itself not a perfect square then return either -1 or an empty value 
like None or null, depending on your language. You may assume the argument is non-negative. */



const  findNextSquare=sq=> {
 const next=(Math.sqrt(sq)+1)**2
 return Number.isInteger(Math.sqrt(sq) )?next:-1
}
console.log(findNextSquare(155))
console.log(findNextSquare(144))