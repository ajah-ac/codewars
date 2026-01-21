
/*Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string */
const lettersToNumbers=s=> {
const alphabets=[...'abcdefghijklmnopqrstuvwxyz']
s=s.replace(/[^a-z0-9]/gi,'')
return [...s]
   .map(char=>{
  if(!isNaN(char))return char
  else if(char===char.toUpperCase())return (alphabets.indexOf(char.toLowerCase())+1)*2
  else return alphabets.indexOf(char)+1
  })
   .reduce((a,c)=>a+Number(c),0)

}
