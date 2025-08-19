/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

eg 
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
const  string=str.replace(/[-_]/g,' ')
let y=''
for(let i=0;i<str.length;i++){
  if(string[i-1]===' '){  y+=(string[i].toUpperCase())}
  else  y+=string[i]
}
return y.split(' ').join('')
}
