
function vowel2index(str) {
const vow=['a','e','o','i','u']
  
return str.split('')
.map((x,i)=>vow.includes(x.toLowerCase())?(i+1):x)
.join('')
  
}
console.log(vowel2index('thE is no food'))
