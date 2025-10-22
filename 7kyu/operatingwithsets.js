/*Example
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]
The result is: [4, 8, 5, 3]

4 elements present in both arrays: 2, 4, 6, 8
8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
5 elements remaning in arr1: 1, 3, 5, 7, 9
3 elements remaning in arr2: 10, 12, 14
No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it! */

const process2Arrays=(arr1,arr2)=>{
  const [a,b]=[new Set(arr1),new Set(arr2)]
 const both=arr1.filter(num=>b.has(num)).length 
 const only1=arr1.filter(num=>!b.has(num)).length 
 const only2=arr2.filter(num=>!a.has(num)).length 
 return [both,only1+only2,only1,only2]
}
