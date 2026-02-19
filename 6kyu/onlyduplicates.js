/**Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee" */
const onlyDuplicates=str=>{
  return [...str].filter((el,i,ar)=>ar.indexOf(el)!==ar.lastIndexOf(el)).join('')
}