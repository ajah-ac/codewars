/* Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.*/





function switcher(x){

  return x.map(num=>{
    const nums=+num
  if(nums>=1 && nums<=26) return String.fromCharCode((26-(nums))+97)
  if(nums===27) return '!'
  if(nums===28) return '?'
  if(nums===29) return ' '           
              
              }
              ) .join('')
}