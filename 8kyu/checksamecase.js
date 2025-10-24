/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples*/
function sameCase(a,b){
  return /^[a-zA-Z]$/.test(a) && /^[a-zA-Z]$/.test(b) ?(a===a.toUpperCase() && b===b.toUpperCase())||(a===a.toLowerCase() && b===b.toLowerCase())?1:0:-1
}