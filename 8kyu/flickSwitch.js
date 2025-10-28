/*Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
 */

const flickSwitch=arr=>{
  const array=[]
  let x=true
for(let char of arr){
  if(char==='flick')x=!x
    array.push(x)
}
return array

}