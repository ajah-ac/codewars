function swicth(word){
return word.split('')
.map(x=>{if(x==='a') return x='b'
    else if(x==='b') return x='a'
    else return x=x
}).join('')
}
console.log(swicth('xyz'))