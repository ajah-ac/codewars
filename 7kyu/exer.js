const x='man testordr'



const finds=str=>{
return str.split("").map(y=>{
if(str.indexOf(y)%2==1)
 return y.toLowerCase()
 else
    return y.toUpperCase()
}).join("")
}
console.log(finds(x))