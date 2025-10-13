/*Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true */


//Solution simplified
function solution(...args){
return args.length> new Set(args).size}
// Solution intricate
{
    function solution(...arg){
  let x=new Map()
  for(let char of arg){
x.set(char,(x.get(char) ||0)+1)
  
  }
  let results=0
  for(let [key,count] of x)
    {
      if(count>1) 
    results+=1
    }
  
  return results>0
}
}