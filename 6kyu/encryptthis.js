/**Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input. */
var encryptThis = function(text) {
  return text.split(' ').map(word=>{
      const first=word[0].charCodeAt(0);
       const last =word.slice(1)
   if(last.length===1){
    return first+last
  }
  else{
    const len=last.length
    const mid=last.substring(1,len-1)
    return first +last.charAt(len-1) +mid+last.charAt(0)
  }
  
  })
  
  
  .join(' ')



}