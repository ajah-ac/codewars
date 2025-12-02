/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"] */
const inArray=(array1,array2)=>{
  const x=[];
for(let str of array1){
  for(let strin of array2){
    if(strin.includes(str) && !x.includes(str))x.push(str)
    }  
}
return x.sort()
}
