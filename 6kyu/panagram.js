/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

 */
const isPangram=string=>{
  const mod=string.toLowerCase().replace(/[^a-z]/gi,'').split('').sort().join('')
  const x=[]
  for(let char of mod){
    if(x.includes(char)==false)
      x.push(char)
  }
  if(x.length===26)
    return true

return false     
  
}
