/**Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */


function solution(str){
   const regex=str.match(/../g)
   if(str.length<1) return []
  if(str.length%2===0)return regex  
  else{
    const last=str.charAt(str.length-1) + '_'
    const comb=[last]
    return [...regex,...comb]
  }
}