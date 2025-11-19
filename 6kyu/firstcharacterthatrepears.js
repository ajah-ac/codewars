/*Find the first character that repeats in a String and return that character.
firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
Another example:
In 'translator' you should return 't', not 'a'.
v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'. */
const firstDup =s=> {
 const x=[...s].reduce((map,char)=>{
      const count=map.get(char)|| 0
       map.set(char,count+1) 
       return map },new Map())
 const duplicates=[];
       for(let [key,value] of x) if(value>1)duplicates.push(key)
  
return duplicates[0]

}