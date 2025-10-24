/*You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'
*/



function countFeelings(string, array) {
  let str=new Set(string)
  let count=0
  
  for(let feeling of array ){
    if([...feeling].every(char=>str.has(char)))
          {count++}    
    }
 return count===1? count+' feeling.':count+' feelings.'
}
