function switcheroo(x){
return x.split('')
  .map(y=>{if(y==='a') return y='b'; 

                           else if(y==='b') return y='a'
                           else return y=y}
                     )
                            .join('')
  
}
console.log(switcheroo('abc'))